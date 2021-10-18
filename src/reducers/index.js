import { combineReducers } from 'redux';
import albumsReducer from './albumsReducer';
import photosReducer from './photosReducer';

export default combineReducers({ albumsArray: albumsReducer, 
								 photosArray: photosReducer });