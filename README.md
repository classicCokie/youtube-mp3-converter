# youtube-mp3-converter 
A simple node module to download youtube videos and convert them to mp3s.
A simple wrapper around the ytdl and ffmped library, which provides a nice and easy to use api to convert youtube links into mp3s. 

## Attention
Downloading videos or their respective audio from youtube, is in direct breach with their Policy. 
Using this module on other videos than your own, may lead to youtube sueing you. 

## Before you start
This module depends on the ffmpeg library. Make sure you have ffmpeg installed. If not see [here](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg) for installation details.

## Install
```npm install youtube-mp3-converter```

## Run Tests
```npm run test```

## Basic Usage
```js
    // Sets up the downloader
    const youtubeMp3Converter = require('youtube-mp3-converter')
    // creates Download function
    const convertLinkToMp3 = youtubeMp3Converter(pathToSaveFiles)
    // Downloads mp3 and Returns path were it was saved.
    const pathToMp3 = await convertLinkToMp3('https://www.youtube.com/watch?v=_cyND_1y1k0')
```

## Usage Options
```js
    const youtubeMp3Converter = require('youtube-mp3-converter')

    const convertLinkToMp3 = youtubeMp3Converter(pathToSaveFiles)

    const pathToMp3 = await convertLinkToMp3('https://www.youtube.com/watch?v=_cyND_1y1k0', {
        startTime: "00:00:10", // from where in the video the mp3 should start
        duration: 20, // Length of mp3 in seconds (from start point)
        title: 'fooo' // The tile of the mp3 file, undefined it takes the youtube title
    })
```


## TODOS
This module is currently lacking some serious tests. If you wanna extend that, please be my guest.


