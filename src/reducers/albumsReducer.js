import { GET_ALBUMS } from '../types/types';

const initialState = {
	albums: []
}

const albumsReducer = (state = initialState, action) => {
	switch(action.type) {
		case GET_ALBUMS:
			return {
				...state, albums: action.payload
			}
		default: return state;	
	}
}

export default albumsReducer;