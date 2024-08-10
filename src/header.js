import React from "react";
import "./header.css";
import { FaSearch } from "react-icons/fa";
import Avatar from "react-avatar";
import { useDataLayerValue } from "./DataLayer";

const Header = () => {
  const [{ user }] = useDataLayerValue();
  const userName = user?.display_name || "Guest";
  const userProfilePicture = user?.images?.[0]?.url || null;
  return (
    <div className="header">
      <div className="headerleft">
        <FaSearch />
        <input placeholder="Search for Artist,Songs,or Albums" type="text" />
      </div>
      <div className="headerright">
        <Avatar
          src={userProfilePicture}
          alt={userName}
          size="50"
          round={true}
          color="#3498db"
          textSizeRatio={1.75}
        />
        <h4>{user?.display_name || "Guest"}</h4>
      </div>
    </div>
  );
};

export default Header;
