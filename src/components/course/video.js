import ReactPlayer from "react-player";

const VidPlayer = () => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="player"
        url="https://www.youtube.com/watch?v=4UZrsTqkcW4&t=1105s&ab_channel=freeCodeCamp.org"
        width="100%"
        height="100%"
        // OVO BI TREBALO DA DISABLUJE DESNI KLIK AL IZ NEKOG RAZLOGA NE RADI
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
};

export default VidPlayer;
