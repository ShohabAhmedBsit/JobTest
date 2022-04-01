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

// Redux Import Here
import {useSelector, useDispatch} from 'react-redux';
import * as  HomeAction from "../store/action/HomeAction";


const marginBottomItem = SIZES.ten;
const paddingItem = SIZES.five;
const height = width * 1;
const sizeOfItem = height + paddingItem * 2 + marginBottomItem;

export default ({navigation}) => {
  const [data, setdata] = React.useState([]);
  const [comingsson, setcomingsson] = React.useState([]);
  const dispatcher = useDispatch();

  const MoviesList = useSelector(state => state.HOME.MoviesList);
  const UpComing = useSelector(state => state.HOME.UpComing);
  const Fav = useSelector(state => state.HOME.Fav);
  console.log("------------------->", MoviesList)
  // console.log(Fav)


  const _carousel = React.useRef();

  React.useEffect(() => {
    // GetAllMovies();
    // ComingSoon()
  }, []);

  const GetAllMovies = () => {


    const options = {
      method: 'GET',
      url: `https://imdb-api.com/API/SearchTitle/k_abh4wbjy/${text}`,
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
  console.log(typeof Fav)

  const addFav = (item) => {

    if(Fav?.some(value => value.id === item.id  )){
        console.log("movie found inside the list.")
    } else{
      let temp = Fav;
      temp.push(item)
      addFavouritex(temp)
    }

   
  }

  const addFavouritex = async (data) => {    
    await dispatcher(HomeAction.AddFav(data));
  };

  const CarouselListRender = ({item, index}) => {
    return (
      <Animated.View style={styles.item}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => {navigation.navigate("Details")}} >
          <View style={styles.wrapText}>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{
                uri: item.image,
              }}
            />
            <View
              style={{
                justifyContent: 'space-evenly',
                padding: SIZES.fifteen,
              }}>
              <Text style={FONTS.boldFont18}>{item?.title}</Text>
              <StarRating
                animation={'rotate'}
                emptyStar={IMAGES.StarUnfilled}
                fullStar={IMAGES.StarFilled}
                halfStarEnabled={false}
                maxStars={5}
                rating={item?.imDbRating / 2}
                starSize={15}
                containerStyle={{
                  width: '50%',
                }}
              />
              <Text style={[FONTS.mediumFont14, {color: COLORS.white}]}>
                Actor name
              </Text>
              <Text
                numberOfLines={2}
                style={[FONTS.lightFont08, , {color: COLORS.whitishGrey}]}>
                {item?.fullTitle}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <Icon
          type={Icons.Ionicons}
          name={'heart'}
          color={COLORS.white}
          style={{position: 'absolute', right: SIZES.ten, top: SIZES.ten}}
          onPress={() =>{
            addFav(item)
          }}
        />
      </Animated.View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary]}
        style={styles.container}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <CustomHeader title="Hi John" />

        <View style={{flex: 0.4}}>
          <Carousel
            ref={_carousel}
            data={tempData}
            renderItem={({item, index}) => {
              return (
                <Image
                  style={[styles.image, {backgroundColor: COLORS.secondary}]}
                  resizeMode="stretch"
                  source={{
                    uri: item.image,
                  }}
            
                />
              );
            }}
            sliderWidth={width - 10}
            itemWidth={width - 100}
            layout={'default'}
            autoplay={true}
            loop
            animatedFriction={800}
            animatedDuration={500}
          />
        </View>
        <View
          style={{flex: 1, justifyContent: 'center', paddingTop: SIZES.ten}}>
          <Carousel
            ref={_carousel}
            data={MoviesList}
            renderItem={CarouselListRender}
            sliderWidth={width - 10}
            itemWidth={width - 75}
            layout={'stack'}
            layoutCardOffset={`20`}
          />
        </View>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapText: {
    height: '100%',
    width: '100%',
    // flexDirection: 'row',
  },
  image: {
    flex: 1,
  },

  item: {
    height: height,
    width: width * 0.8,
    alignSelf: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.ten,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
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
