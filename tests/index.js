const downloadMp3 = require('../lib');

const videosToDownload = [
  {url: 'https://www.youtube.com/watch?v=GQ0qds_46Vk', params: {title: 'Rain Walking'}},
  {url: 'https://www.youtube.com/watch?v=nMfPqeZjc2c', params: {title: 'White Noise'}},
];

const main = async () => {
  try {
    await Promise.all(
        videosToDownload.map(({url, params}) => downloadMp3(url, params)),
    );
  } catch (error) {
    console.log(error);
  }
};

main();

