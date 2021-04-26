const ytdl = require('ytdl-core');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');

const convertVideoToMp3 = (title) =>
  new Promise((resolve, reject) =>
    ffmpeg(`${__dirname}/${title}.mp4`)
        .toFormat('mp3')
        .on('error', (err) => reject(err))
        .on('end', () => resolve(title))
        .saveToFile(`${__dirname}/${title}.mp3`),
  );

const deleteVideoFile = (title) =>
  fs.unlinkSync(`${__dirname}/${title}.mp4`);

const downloadVideo = ({title, videoUrl}) =>
  new Promise((resolve, reject) => {
    const stream = ytdl(
        videoUrl,
        {filter: 'audioonly'},
    ).pipe(fs.createWriteStream(`${__dirname}/${title}.mp4`));

    stream.on('error', (error) => reject(error));
    stream.on('finish', () => resolve(title));
  });

const mergeParams = (videoInfo, params) => {
  if (!params) {
    return {
      title: videoInfo.videoDetails.title,
      videoUrl: videoInfo.videoDetails.video_url,
    };
  }

  return {
    title: params.title ?? videoInfo.title,
    videoUrl: videoInfo.videoDetails.video_url,
  };
};

const downloadMp3 = (videoUrl, params) =>
  ytdl.getInfo(videoUrl)
      .then((info) => mergeParams(info, params))
      .then(downloadVideo)
      .then(convertVideoToMp3)
      .then(deleteVideoFile)
      .catch((error) => console.log(error));

module.exports = downloadMp3;
