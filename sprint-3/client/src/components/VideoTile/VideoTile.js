import "./VideoTile.scss";
import SideVideo from "../sideVideo/sideVideo";

function VideoTile({ mainData, sideData }) {
  let compareId = sideData.filter((item) => item.id !== mainData[0].id);

  return (
    <div>
      <h3 className="sidevideo__header">NEXT VIDEO</h3>
      <ul className="sidevideo-map__wrapper">
        {compareId.map((video) => (
          <SideVideo
            video={video.image}
            title={video.title}
            channel={video.channel}
            key={video.id}
            id={video.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default VideoTile;
