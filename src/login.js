import React, { useState } from "react";
import "./login.css";
import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();
const Login = () => {
  const [{ user, token }, dispatch] = useDataLayerValue();
  const [{ playlists }] = useDataLayerValue();

  const authEndpoint = "https://accounts.spotify.com/authorize";
  const redirectUri = "http://localhost:3000/";
  const clientId = "bbde39ba927f4c3fa491ed676c513f62";
  const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];
  const getTokenFromUrl = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
      }, {});
  };

  const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      localStorage.setItem("spotifyToken", _token);

      const expiresIn = hash.expires_in || 3600;
      const refreshTokenTimer = setTimeout(() => {}, (expiresIn - 60) * 1000);

      return () => clearTimeout(refreshTokenTimer);
    }

    console.log("the token is ", token);

    // Additional logic to use the token
    spotify.getMe().then((user) => {
      dispatch({
        type: "SET_USER",
        user: user,
      });
    });

    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists,
      });
    });

    spotify.getPlaylist("37i9dQZF1DWWwrjLPC16W7").then((response) =>
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
    );
  }, [dispatch, token]);

  console.log("the user details", user);

  return (
    <>
      {token ? (
        <Player spotify={spotify} />
      ) : (
        <div className="login">
          <h1>Login</h1>
          <img
            src="https://static.tildacdn.com/tild3462-3561-4535-b264-346339346162/Logo-34x-100.jpg"
            alt=""
          />

          <a href={loginUrl}>Login With Musicfy</a>
        </div>
      )}
    </>
  );
};
export default Login;
