const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");
const fs = require("fs");
const mainVideo = require("../data/mainVideos.json");

function readMainVideos() {
  const mainContent = fs.readFileSync("./data/mainVideos.json");
  return JSON.parse(mainContent);
}

router.use((_req, _res, next) => {
  next();
});

router.get("/videos", (_req, res) => {
  const sideVideos = mainVideo.map((video) => {
    return {
      id: video.id,
      title: video.title,
      image: video.image,
      channel: video.channel,
    };
  });
  res.json(sideVideos);
});

router.get("/videos/:id", (req, res) => {
  const videoId = mainVideo.find((element) => element.id === req.params.id);
  if (videoId) {
    res.json(mainVideo.filter((video) => video.id === req.params.id));
  } else {
    res.status(404);
  }
});

// ----------------------------------------------------------

router.post("/videos", (req, res) => {
  const newSideVid = {
    id: uniqid(),
    title: req.body.title,
    description: req.body.description,
    image: "https://i.imgur.com/l2Xfgpl.jpg",
    channel: "Omar Said",
    views: 0,
    likes: 0,
    duration: "4:27",
    timestamp: Date.now(),
    comments: [],
  };

  const newVideo = readMainVideos();
  newVideo.push(newSideVid);
  fs.writeFileSync("./data/mainVideos.json", JSON.stringify(newVideo));
  res.status(201).json(newVideo);
});

module.exports = router;

// router.post("/videos", (req, res) => {
//   const newSideVid = {
//     id: uniqid(),
//     title: req.body.title,
//     description: req.body.description,
//     image: "https://i.imgur.com/l2Xfgpl.jpg",
//     channel: "Omar Said",
//     views: 0,
//     likes: 0,
//     duration: "4:27",
//     timestamp: Date.now(),
//     comments: [],
//   };

//   const newVideo = readMainVideos();
//   newVideo.push(newSideVid);
//   fs.writeFileSync("./data/mainVideos.json", JSON.stringify(newVideo));
//   res.status(201).json(newVideo);
// });
