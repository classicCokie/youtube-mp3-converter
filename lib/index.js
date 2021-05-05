const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');

const downloadAndConvertVideoToMp3 = ({
  title,
  videoUrl,
  startTime,
  duration,
  filePath,
}) =>
  new Promise((resolve, reject) =>
    ffmpeg(ytdl(videoUrl, {filter: 'audioonly'}))
        .toFormat('mp3')
        .setStartTime(startTime)
        .duration(duration)
        .on('error', (err) => reject(err))
        .on('end', () => resolve(`${filePath}/${title}.mp3`))
        .saveToFile(`${filePath}/${title}.mp3`));


const mergeParams = (videoInfo, params, filePath) => ({
  title: params.title ?? videoInfo.videoDetails.title,
  videoUrl: videoInfo.videoDetails.video_url,
  startTime: params.startTime ?? '00:00:00',
  duration: params.duration ?? videoInfo.videoDetails.lengthSeconds,
  filePath: filePath ?? __dirname,
});

const youtubeMp3Converter = (filePath) => (youtubeUrl, params={}) =>
  ytdl
      .getInfo(youtubeUrl)
      .then((info) => mergeParams(info, params, filePath))
      .then(downloadAndConvertVideoToMp3);

module.exports = youtubeMp3Converter;
