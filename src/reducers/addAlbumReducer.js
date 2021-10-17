import { ADD_ALBUM } from '../types/types';

const initialState = {
	albums: []
}

const addAlbumReducer = (state = initialState, action) => {
	console.log(state.albums);
	switch(action.type) {
		case ADD_ALBUM:
			return {
				...state, albums: [...state.albums, action.payload]
			}
		default: return state;	
	}
}

export default addAlbumReducer;