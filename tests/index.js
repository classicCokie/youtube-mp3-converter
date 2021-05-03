const youtubeMp3Converter = require('../lib');
const test = require('tape');


// eslint-disable-next-line max-len
test('Given a Url and Title are provided, it returns the expected mp3 Path', async function(t) {
  try {
    const convertLinkToMp3 = youtubeMp3Converter(__dirname);
    const pathToMp3 = await convertLinkToMp3('https://www.youtube.com/watch?v=HBxn56l9WcU', {title: 'Frog'});

    t.equal(pathToMp3, `${__dirname}/Frog.mp3`);
  } catch (err) {
    console.error(err);
  }
});

