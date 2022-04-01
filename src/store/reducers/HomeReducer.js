import {FAVSCREEN, HOMESCREEN, UPCOMING} from '../ActionType';

const initialState = {
  MoviesList: [],
  UpComing: [],
  Fav: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HOMESCREEN:
      return {
        ...state,
        MoviesList: action.MoviesList,
      };
    case UPCOMING:
      return {
        ...state,
        UpComing: action.UpComing,
      };
    case FAVSCREEN:
      return {
        ...state,
        Fav: action.Fav,
      };

    default:
      return state;
  }
};
