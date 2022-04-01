import axios from 'axios';
import * as React from 'react';

import {
  Animated,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StarRating from 'react-native-star-rating';
import Carousel from 'react-native-snap-carousel';

import {COLORS, width, SIZES, IMAGES, FONTS} from '../constants';
import CustomHeader from '../components/CustomHeader';
import Icon, {Icons} from '../components/Icons';

const marginBottomItem = SIZES.ten;
const paddingItem = SIZES.five;
const imgHeight = width * 0.9;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;

export default ({navigation}) => {
  const [data, setdata] = React.useState([]);
  const [comingsson, setcomingsson] = React.useState([]);

  const _carousel = React.useRef();

  React.useEffect(() => {
    // GetAllMovies();
    // ComingSoon()
  }, []);

  const GetAllMovies = () => {
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
        setdata(temp);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const ComingSoon = () => {
    const options = {
      method: 'GET',
      url: 'https://imdb-api.com/API/ComingSoon/k_abh4wbjy',

      headers: {
        accept: 'text/plain',
      },
    };

    axios
      .request(options)
      .then(function ({data}) {
        let Data = data.items;
        // console.log("Data========================", Data.length)

        let temp = [];
        Data.map((item, index) => {
          if (index < 10) {
            temp.push(item);
          }
        });
        setcomingsson(temp);
      })
      .catch(function (error) {
        console.error(error);
      });
  };



  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary]}
        style={styles.container}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <View style={{flex: 0.9, backgroundColor: 'red'}}>
            <Image resizeMode="cover" style={{flex:1, backgroundColor:'pink'}} source={{uri:"https://www.cinematerial.com/media/box-office/8178634.jpg"}} />
        </View>
        <View style={{flex: 1, backgroundColor: 'blue'}}></View>
        <CustomHeader title="Hi John" style={styles.header} />
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({

  header: {
    position: 'absolute',
    width:'100%'
  },


  container: {
    flex: 1,
  },
});

const tempData = [
  {
    contentRating: 'PG',
    directorList: [[Object]],
    directors: 'Jeff Fowler',
    fullTitle: 'Sonic the Hedgehog 2 (2022)',
    genreList: [[Object], [Object], [Object], [Object], [Object], [Object]],
    genres: 'Animation, Action, Adventure, Comedy, Family, Sci-Fi',
    id: 'tt12412888',
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
    id: 'tt4998632',
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
    id: 'tt11548822',
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
    id: 'tt9735462',
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
