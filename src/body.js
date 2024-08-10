import React from "react";
import "./body.css";
import Header from "./header";
import { useDataLayerValue } from "./DataLayer";
import { MdOutlinePlayCircle } from "react-icons/md";
import { IoIosHeart, IoMdMore } from "react-icons/io";
import Songs from "./songrow";
const Body = ({ spotify }) => {
  const [{ discover_weekly }] = useDataLayerValue();

  return (
    <div className="bodyof">
      <Header spotify={spotify} />
      <div className="bodyinfo">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="bodyinfotxt">
          <strong>Playlist</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="songs">
        <div className="songicons">
          <MdOutlinePlayCircle fontSize="large" className="playtop" />
          <IoIosHeart fontSize="large" className="fav" />
          <IoMdMore className="horizon" />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <Songs track={item.track} />
        ))}
      </div>
    </div>
  );
};
export default Body;
