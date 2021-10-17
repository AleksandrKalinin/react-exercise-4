import { SELECT_ALBUM } from '../types/types';

const initialState = {
	id: null
}

const singleAlbumReducer = (state = initialState, action) => {
	switch(action.type) {
		case SELECT_ALBUM:
			return {
				...state, id: action.payload
			}
		default: return state;	
	}
}

export default singleAlbumReducer;