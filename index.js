const timecut = require("timecut");
timecut({
  // url: "https://tungs.github.io/truchet-tiles-original/#autoplay=true&switchStyle=random",
  url: " https://zhoukaiwen.com/proj/dataVIS/store/index.html",
  // url: "https://finvideo.cnfic.com.cn/easyv/bigscreen/841",
  viewport: {
    width: 1920, // sets the viewport (window size) to 800x600
    height: 1080,
  },
  selector: "body", // crops each frame to the bounding box of '#container'
  left: 20,
  top: 40, // further crops the left by 20px, and the top by 40px
  right: 6,
  bottom: 30, // and the right by 6px, and the bottom by 30px
  fps: 50, // saves 30 frames for each virtual second
  duration: 30, // for 20 virtual seconds
  output: "video.mp4", // to video.mp4 of the current working directory
  ffmpegPath: "./ffmpeg",
}).then(function () {
  console.log("Done!");
});
