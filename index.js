const timecut = require("timecut");
timecut({
  // url: "https://tungs.github.io/truchet-tiles-original/#autoplay=true&switchStyle=random",
  url: " https://zhoukaiwen.com/proj/dataVIS/store/index.html",
  // url: "https://finvideo.cnfic.com.cn/easyv/bigscreen/841",
  viewport: {
    width: 1920, // sets the viewport (window size) to 800x600
    height: 1180,
  },
  selector: "body", // crops each frame to the bounding box of '#container'
  left: 0,
  top: 0, // further crops the left by 20px, and the top by 40px
  right: 0,
  bottom: 0, // and the right by 6px, and the bottom by 30px
  fps: 5, // saves 30 frames for each virtual second
  duration: 2, // for 20 virtual seconds
  output: "video.mp4", // to video.mp4 of the current working directory
  launchArguments: ['--no-sandbox', '--disable-setuid-sandbox'],
  ffmpegPath: "./ffmpeg",
 inputOptions:['-analyzeduration','100M','-probesize','50M']
}).then(function () {
  console.log("Done!");
});