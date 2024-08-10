import React from "react";
import "./footer.css";
import { useState } from "react";
import { IoShuffle } from "react-icons/io5";
import { MdSkipPrevious } from "react-icons/md";
import { MdOutlinePlayCircle } from "react-icons/md";
import { IoIosRepeat } from "react-icons/io";
import { MdSkipNext } from "react-icons/md";
import { BsFillVolumeDownFill } from "react-icons/bs";
import { FaPlayCircle, FaVolumeDown, FaListUl } from "react-icons/fa";
import { useDataLayerValue } from "./DataLayer";

const Footer = ({ track }) => {
  const [{ discover_weekly }] = useDataLayerValue();
  const [volume, setVolume] = useState(50);
  const handleVolumeChange = (newVolume) => {
    // Handle volume change logic
    setVolume(newVolume);
  };

  const handleSliderChange = (newValue) => {
    // Handle slider change logic
    // This can be used for seeking through the track or any other functionality
  };
  return (
    <div className="footering">
      <div className="footerleft">
        <img
          className="albumlogo"
          src="https://i.scdn.co/image/ab67616d0000b27368896d4f24df4bbd813ca137"
          alt=""
        />
        <div className="footersonginfo">
          <h4>Oh My Baby</h4>
          <p>Now Playing...</p>
        </div>
      </div>
      <div className="footercenter">
        <IoShuffle className="shuffle" />
        <MdSkipPrevious className="previous" />
        <MdOutlinePlayCircle fontSize="large" className="play" />
        <MdSkipNext className="next" />
        <IoIosRepeat className="repeat" />
      </div>
      <div className="footerright">
        <FaVolumeDown className="volume" />
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          className="volume-slider"
        />

        {/* <div className="slider-container">
          <Slider value={volume} onChange={handleVolumeChange} />
          <Slider onChange={handleSliderChange} />
        </div> */}
      </div>
    </div>
  );
};
export default Footer;
