const downloadMp3 = require('../lib');

const videosToDownload = [
  {url: 'https://www.youtube.com/watch?v=uupzk-YCBO0', params: {title: 'Zen Music'}},
  {url: 'https://www.youtube.com/watch?v=7RDoi3RyIFg', params: {title: 'River Flowing'}},
  {url: 'https://www.youtube.com/watch?v=ZF5Mtvp6BK0', params: {title: 'Forest Sounds'}},
  {url: 'https://www.youtube.com/watch?v=4UPBZNBicFs', params: {title: 'Waterfall Spirit Music'}},

];

const main = async () => {
  try {
    const paths = await Promise.all(
        videosToDownload.map(({url, params}) => downloadMp3(url, params)),
    );
    console.log(paths);
  } catch (error) {
    console.log(error);
  }
};

main();

