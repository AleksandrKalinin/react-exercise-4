import { combineReducers } from 'redux';
import albumsReducer from './albumsReducer';
import photosReducer from './photosReducer';
import addAlbumReducer from './addAlbumReducer';
import addPhotoReducer from './addPhotoReducer';


export default combineReducers({ albumsArray: albumsReducer, 
								 photosArray: photosReducer,
								 addAlbumReducer: addAlbumReducer,
								 addPhotoReducer: addPhotoReducer });