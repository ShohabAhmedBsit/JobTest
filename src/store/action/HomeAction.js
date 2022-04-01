import {FAVSCREEN, HOMESCREEN} from '../ActionType';
import {CONSTANTS} from '../../constants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GetHomeScreenData = (keys, response) => {
  return async (dispatch, getState) => {
    const options = {
      method: 'GET',
      url: 'https://imdb-api.com/API/Top250Movies/k_abh4wbjy',
      headers: {
        accept: 'text/plain',
      },
    };

    axios
      .request(options)
      .then(function ({data}) {
        let Data = data.items;

        let temp = [];
        Data.map((item, index) => {
          if (index < 5) {
            temp.push(item);
          }
        });
        console.log('------------------->', temp);
        dispatch({
          type: HOMESCREEN,
          MoviesList: temp,
        });
      })
      .catch(function (error) {
        console.error(error);
      });

  
  };
};

export const AddFav = (Data, response) => {
  return async (dispatch, getState) => {
    console.log(Data)

    dispatch({
      type: FAVSCREEN,
      Fav: Data,
    });
    saveDataToStorage(Data);
  };
};
export const ResetFav = (Data, response) => {
  return async (dispatch, getState) => {
    console.log(Data)

    dispatch({
      type: FAVSCREEN,
      Fav: Data,
    });
    // saveDataToStorage(Data);
  };
};

export const RemoveFav = (id, response) => {
  return async (dispatch, getState) => {
    const FavList = getState().HOME.Fav;
    let temp = [];
    console.log('id', id);
    FavList.map((item, index) => {
      console.log(item.id);
      if (id !== item.id) {
        temp.push(item);
      }
    });
    console.log('temp', temp);
    // console.log("==============================>",FavList)
    dispatch({
      type: FAVSCREEN,
      Fav: temp,
    });
  };
};

const saveDataToStorage = userData => {
  AsyncStorage.setItem('Fav', JSON.stringify(userData));
};

const tempData = [
  {
    contentRating: 'PG',
    directorList: [[Object]],
    directors: 'Jeff Fowler',
    fullTitle: 'Sonic the Hedgehog 2 (2022)',
    genreList: [[Object], [Object], [Object], [Object], [Object], [Object]],
    genres: 'Animation, Action, Adventure, Comedy, Family, Sci-Fi',
    id: 'tt127412888',
    imDbRating: '',
    imDbRatingCount: '',
    image:
      'https://imdb-api.com/images/original/MV5BNTBjZTBlN2YtOWQzZC00YTAzLWFiOWUtYzRiZWRmNjA5YWFmXkEyXkFqcGdeQXVyMTA0NTIyOTQ@._V1_Ratio0.6699_AL_.jpg',
    metacriticRating: '47',
    plot: 'When the manic Dr Robotnik returns to Earth with a new ally, Knuckles the Echidna, Sonic and his new friend Tails is all that stands in their way.',
    releaseState: 'April 8',
    runtimeMins: '122',
    runtimeStr: '2h 2mins',
    starList: [[Object], [Object], [Object], [Object]],
    stars: "Ben Schwartz, Idris Elba, Collen O'Shanussy, Jim Carrey",
    title: 'Sonic the Hedgehog 2',
    year: '2022',
  },
  {
    contentRating: 'R',
    directorList: [[Object]],
    directors: 'Michael Bay',
    fullTitle: 'Ambulance (2022)',
    genreList: [[Object], [Object], [Object], [Object]],
    genres: 'Action, Crime, Drama, Thriller',
    id: 'tt49988632',
    imDbRating: '',
    imDbRatingCount: '',
    image:
      'https://imdb-api.com/images/original/MV5BYjUyN2VlZGEtNGEyZC00YjViLTgwYmQtZDJiM2FlOTU3Mjg2XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_Ratio0.6699_AL_.jpg',
    metacriticRating: '46',
    plot: 'Two robbers steal an ambulance after their heist goes awry.',
    releaseState: 'April 8',
    runtimeMins: '136',
    runtimeStr: '2h 16mins',
    starList: [[Object], [Object], [Object], [Object]],
    stars:
      'Jake Gyllenhaal, Yahya Abdul-Mateen II, Eiza González, Garret Dillahunt',
    title: 'Ambulance',
    year: '2022',
  },
  {
    contentRating: '',
    directorList: [[Object]],
    directors: 'Andrea Arnold',
    fullTitle: 'Cow (2021)',
    genreList: [[Object]],
    genres: 'Documentary',
    id: 'tt115948822',
    imDbRating: '',
    imDbRatingCount: '',
    image:
      'https://imdb-api.com/images/original/MV5BYzY1MWQ0NjEtMDM4Yi00MDA3LTg0NDUtYWI3MjNjOTg1MDE3XkEyXkFqcGdeQXVyNTIyODMzMzA@._V1_Ratio0.6699_AL_.jpg',
    metacriticRating: '81',
    plot: 'A close-up portrait of the daily lives of two cows.',
    releaseState: 'April 8',
    runtimeMins: '94',
    runtimeStr: '1h 34mins',
    starList: [[Object]],
    stars: 'Lin Gallagher',
    title: 'Cow',
    year: '2021',
  },
  {
    contentRating: 'PG-13',
    directorList: [[Object]],
    directors: 'Valérie Lemercier',
    fullTitle: 'Aline (2020)',
    genreList: [[Object], [Object], [Object], [Object]],
    genres: 'Biography, Comedy, Drama, Music',
    id: 'tt97354602',
    imDbRating: '',
    imDbRatingCount: '',
    image:
      'https://imdb-api.com/images/original/MV5BNjUxYTQ3YzItNjU5Ny00ZGM0LWJkMGUtN2FkMWRiNjFlY2ExXkEyXkFqcGdeQXVyMzcwMzExMA@@._V1_Ratio0.7368_AL_.jpg',
    metacriticRating: '',
    plot: 'With the support of her family and the man she loves, the 14th child of a modest family will become the most famous singer in the world.',
    releaseState: 'April 8',
    runtimeMins: '128',
    runtimeStr: '2h 8mins',
    starList: [[Object], [Object], [Object], [Object]],
    stars: 'Valérie Lemercier, Sylvain Marcel, Danielle Fichaud, Roc Lafortune',
    title: 'Aline',
    year: '2020',
  },
];
