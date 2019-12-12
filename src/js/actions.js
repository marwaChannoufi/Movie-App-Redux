import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from './actions_types';


export const addMovie = (payload) => {
  
  return {
  	type: ADD_MOVIE,
    payload
  }
}

export const deleteMovie = (payload) => {

  return {
    type: DELETE_MOVIE,
    payload
  }
}

export const editMovie = (payload) => {
  return {
  	type: EDIT_MOVIE,
    payload
	}
}