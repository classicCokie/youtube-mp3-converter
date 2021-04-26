# youtube-mp3-converter (WIP)


## Attention
Downloading videos or their respective audio from youtube, is in direct breach with their Policy. 
Using this module on other videos than your own, may lead to youtube sueing you. 

## Run Tests
```npm run test```


## Usage
```js
    // Sets up the downloader
    const mp3Downloader = createMp3Downloader()
    // Downloads and Converts the video
    const pathToMp3 = await mp3Downloader('https://www.youtube.com/watch?v=_cyND_1y1k0')
```
