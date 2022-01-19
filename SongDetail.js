import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  return song ? (
    <div>
        <h3>Details for:</h3>
        <p>
            Title: {song.title}
        <br />
            Duration: {song.duration}
        </p>
    </div>
  ) : (
    <div>Click on seclect button for song detail.</div>
  );
};
const mapStateToProps = (state) => {
  console.log("song detail:::: ", state.selectedSong);
  return { song: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
