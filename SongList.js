import React, { Component } from "react";
import { connect } from "react-redux";
import {selectSong} from "../actions"

class SongList extends Component {
  //const {songs, dispatch} = this.props

  renderlist = () => {
      const {songs, favoriteTitle} = this.props
    return songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary"
            onClick={() => this.props.selectSong(song)}
            >SELECT</button>
          </div>
          <div className="content">
              {song.title}
              <div>
                  <b>{song.title === favoriteTitle && 'Favorite!'}</b>
              </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return <div className="ui divided list">{this.renderlist()}</div>;
  }
}
const mapStateToProps = (state) => {
    console.log(state);
  return { songs: state.songData.songs, favoriteTitle: state.songData.favoriteTitle };
};
export default connect(mapStateToProps,{selectSong})(SongList);
