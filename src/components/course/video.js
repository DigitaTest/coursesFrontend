import ReactPlayer from "react-player";

const VidPlayer = ({ video }) => {
  return (
    <div className="videoPlayer">
      <ReactPlayer
        id="video"
        url={video}
        width="100%"
        height="100%"
        // OVO BI TREBALO DA DISABLUJE DESNI KLIK AL IZ NEKOG RAZLOGA NE RADI
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
};

export default VidPlayer;
