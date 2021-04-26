# youtube-mp3-converter (WIP not currently published on npm)


## Attention
Downloading videos or their respective audio from youtube, is in direct breach with their Policy. 
Using this module on other videos than your own, may lead to youtube sueing you. 

## Before you start
This module depends on the ffmpeg library. Make sure you have ffmpeg installed. If not see [here](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg) for installation details.

## Run Tests
```npm run test```




## Usage (This is not the current implementation, will be updated in the future)

```js
    // Sets up the downloader
    const downloadMp3 = require('youtube-mp3-converter')
    // Downloads and Converts the video
    const pathToMp3 = await downloadMp3('https://www.youtube.com/watch?v=_cyND_1y1k0')
```
