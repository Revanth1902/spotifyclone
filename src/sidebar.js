import React from "react";
import "./siderbar.css";
import Options from "./sidebaroptions";
import { useDataLayerValue } from "./DataLayer";

const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebaring">
      <img
        className="logoforsidebar"
        src="https://static.tildacdn.com/tild3462-3561-4535-b264-346339346162/Logo-34x-100.jpg"
        alt=""
      />
      <div className="home">
        <Options
          id="homeimage"
          imageUrl="https://i.pinimg.com/474x/71/89/88/718988215800391b6050182a28ca6810.jpg"
          title="HOME"
        />
      </div>
      <div className="search">
        <Options
          id="search"
          imageUrl="https://png.pngtree.com/png-vector/20190319/ourmid/pngtree-vector-search-icon-png-image_848103.jpg"
          title="Search"
        />
      </div>
      <div className="library">
        <Options
          id="library"
          imageUrl="https://i.pinimg.com/474x/d9/c1/cc/d9c1cce84ecc8be21c101d56d20a9427.jpg"
          title="Your Library"
        />
      </div>
      <br />
      <strong className="playlist">PLAYLISTS</strong>
      <hr />
      <div className="playlisting">
        {playlists?.items?.map((playlist) => (
          <Options key={playlist.id} title={playlist.name} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
