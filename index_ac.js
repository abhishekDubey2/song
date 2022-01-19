//Action creator function
export const selectSong = (songs) => {
    //return an action
    return {
        type: 'SONG_SELECTED',
        payload: songs
    }
}