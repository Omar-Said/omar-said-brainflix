import "./VideoTile.scss";
import SideVideo from "../sideVideo/sideVideo";

function VideoTile(props) {
  let mainData = props.mainData[0];

  let compareId = props.sideData.filter((item) => {
    if (item.id !== mainData.id) {
      return item;
    } else {
      return false;
    }
  });

  return (
    <div className="sidevideo">
      <h3 className="sidevideo-title">NEXT VIDEO</h3>
      <ul className="ul">
        {compareId.map((video) => (
          <SideVideo
            video={video.image}
            title={video.title}
            channel={video.channel}
            key={video.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default VideoTile;

// import "./VideoTile.scss";
// import SideVideo from "../sideVideo/sideVideo";

// function VideoTile(props) {
//   console.log(props.mainData[0].id);
//   let compareId = props.sideData.filter((item) => {
//     if (item.id !== props.mainData[0].id) {
//       return item;
//     }
//   });

//   return (
//     <div className="sidevideo">
//       <h3 className="sidevideo-title">NEXT VIDEO</h3>
//       <ul className="ul">
//         {compareId.map((video) => (
//           <SideVideo
//             video={video.image}
//             title={video.title}
//             channel={video.channel}
//             key={video.id}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default VideoTile;
