import { ADD_PHOTO } from '../types/types';

const initialState = {
	photos: []
}

const addPhotoReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_PHOTO:
			return {
				state, photos: [...state.photos, action.payload]
			}
		default: return state;	
	}
}

export default addPhotoReducer;