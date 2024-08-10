import React from "react";
import { useState ,useEffect} from "react";
import "./songrow.css";
import SpotifyWebApi from "spotify-web-api-js";
import reducer from "./reducer";
import { useReducer } from "react";
import { useDataLayerValue } from "./DataLayer";

const Songs = ({ track }) => {
  const [{ token }] = useDataLayerValue();
  const [loading, setLoading] = useState(true);
  const sp = new SpotifyWebApi();
  const [saavnData, setSaavnData] = useState(null);

  console.log("the user is", token);

  // const handlePlayPauseSongs = () => {
  //   sp.setAccessToken(token);
  //   const trackUri = "spotify:track:3NJa12j9bLQ7eZHg0JNrRD";
  //   sp.play({
  //     uris: [trackUri],
  //   });
  // };
  useEffect(() => {
    const fetchSaavnData = async () => {
      try {
        const response = await fetch(
          `https://saavn.dev/search/songs?query=${encodeURIComponent(
            track.name
          )}&page=1&limit=1`
        );

        if (response.ok) {
          const saavnData = await response.json();
          setSaavnData(saavnData.data.results[0]);
        } else {
          console.error("Failed to fetch Saavn data");
        }
      } catch (error) {
        console.error("Error fetching Saavn data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSaavnData();
  }, [track.name]);

  const handlePlayPauseSongs = () => {
    if (
      saavnData &&
      saavnData.downloadUrl &&
      saavnData.downloadUrl.length > 0
    ) {
      const downloadUrl = saavnData.downloadUrl[4].link;
      console.log("Download URL:", downloadUrl);

      // Create an audio element and play the song
      const audio = new Audio(downloadUrl);
      audio
        .play()
        .then(() => {
          console.log("Audio is playing");
        })
        .catch((error) => {
          console.error("Error playing audio:", error);
        });
    } else {
      console.error("No valid download URL available");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="song">
      <img className="albumimg" src={track.album.images[0].url} alt="" />
      <div className="songinfo">
        <h1>{track.name}</h1>
        <div className="artistalbumname">
          <p>
            {track.artists.map((artist) => artist.name).join(", ")} •{" "}
            {track.album.name}
          </p>
          <button type="button" onClick={handlePlayPauseSongs}>
            Play
          </button>
        </div>
      </div>
    </div>
  );
};
export default Songs;
