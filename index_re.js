import {combineReducers} from 'redux';

const songReducer = () => {
  return {
        songs: [
            { title: "Ram Siya Ram", duration: "4.05" },
            { title: "Kabhi Ram Banke Kabhi Shyam Banke", duration: "6.25" },
            { title: "Jay Hanuman Gyan gun sagar", duration: "11.05" },
            { title: "Namo namo Ji Shankara", duration: "8.13" },
            { title: "Jay Ambe gori", duration: "10.05" }
        ],
        favoriteTitle: 'Ram Siya Ram'
    }
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

 export default combineReducers({
     songData: songReducer,
     selectedSong: selectedSongReducer
 })