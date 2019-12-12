import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from './actions_types';

const initialState = {
  movies: [
    {
      id: 1050,
      title: 'V for Vandetta',
      firas:
        'https://i.ytimg.com/vi/H6KLwJshR8k/maxresdefault.jpg',
      rating: 5,
      trailer: 'https://www.youtube.com/embed/lSA7mAHolAw'
    },
    {
      id: 1205,
      title: 'The Detachement',
      firas: 'https://i.ytimg.com/vi/H6KLwJshR8k/maxresdefault.jpg',
        rating: 4,
      trailer: 'https://www.youtube.com/embed/lSA7mAHolAw'
    },
    {
      id: 20265,
      title: 'The experiment',
      firas: 'https://i.ytimg.com/vi/H6KLwJshR8k/maxresdefault.jpg',
      rating: 5,
      trailer: 'https://www.youtube.com/embed/lSA7mAHolAw'
    },
    {
      id: 336598,
      title: 'Inception',
      firas:'https://i.ytimg.com/vi/H6KLwJshR8k/maxresdefault.jpg',
      rating: 4,
      trailer: 'https://www.youtube.com/embed/YoHD9XEInc0&t'
    }
  ],
  loading: true
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, payload]
        // movies: [...state.movies, {...payload,id:Date.now()}]
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(el => el.id !== Number(payload))
      };
    case EDIT_MOVIE:
      return {
        ...state,
        movies: state.movies.map(el =>
          el.id === Number(payload.id)
            ? (el = payload)
            : 
              el
        )
      };

    default:
      return state;
  }
};
export default rootReducer;