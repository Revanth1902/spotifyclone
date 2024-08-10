import React from "react";
import "./player.css";
import Sidebar from "./sidebar";

import Body from "./body";
import Footer from "./footer";
import { useDataLayerValue } from "./DataLayer";

const Player = ({ spotify }) => {
  const [{ discover_weekly }] = useDataLayerValue();
  return (
    <div className="player">
      <div className="playerbody">
        <Sidebar />
        <Body spotify={spotify} />
        {discover_weekly?.tracks.items.map((item) => (
          <Footer track={item.track} />
        ))}
      </div>
    </div>
  );
};
export default Player;
