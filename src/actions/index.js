import { GET_ALBUMS } from '../types/types';
import { GET_PHOTOS } from '../types/types';
import { ADD_ALBUM } from '../types/types';
import { ADD_PHOTO } from '../types/types';
import axios from 'axios';

export const getAlbums = () => async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/albums');
  dispatch({
    type: GET_ALBUMS,
    payload: res.data
  })
}

export const getPhotos = (id) => async dispatch => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
  dispatch({
    type: GET_PHOTOS,
    payload: res.data
  })
}

export const addAlbum = (album) => dispatch => {  
  dispatch({
    type: ADD_ALBUM,
    payload: album
  })
}

export const addPhoto = (photo) => async dispatch => {
  dispatch({
    type: ADD_PHOTO,
    payload: photo
  })
}