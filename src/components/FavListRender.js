import React from 'react';

import {Animated, View, StyleSheet, Image, Text} from 'react-native';
import StarRating from 'react-native-star-rating';

import {COLORS, width, SIZES, IMAGES, FONTS} from '../constants';
import Icon, {Icons} from './Icons';

const marginBottomItem = SIZES.ten;
const paddingItem = SIZES.five;
const imgHeight = width * 0.25;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;

const FavListRender = (props) => {
let item = props.item
  return (
    <View style={styles.item}>
      <View
        // colors={[COLORS.secondary, COLORS.primary]}
        style={styles.wrapText}>
        <Image
          style={{height: '100%', width: '30%', borderRadius: SIZES.twenty}}
          resizeMode="cover"
          source={{
            uri: item.image,
          }}
        />
        <View
          style={{
            justifyContent: 'space-evenly',
            paddingHorizontal: SIZES.fifteen,
          }}>
          <Text style={[FONTS.mediumFont12, {color: COLORS.white}]}>
            {item?.fullTitle}
          </Text>
          <StarRating
            animation={'rotate'}
            emptyStar={IMAGES.StarUnfilled}
            fullStar={IMAGES.StarFilled}
            maxStars={5}
            rating={3}
            starSize={15}
            containerStyle={{
              width: '50%',
            }}
          />
          <Text style={[FONTS.mediumFont14, {color: COLORS.white}]}>
            {item?.directors}
          </Text>
          <Text
            numberOfLines={2}
            style={[FONTS.mediumFont10, , {color: COLORS.whitishGrey}]}>
            {item?.genres}
          </Text>
        </View>
      </View>
      <Icon
        type={Icons.Ionicons}
        name={'heart'}
        size={18}
        color={COLORS.secondary}
        style={{position: 'absolute', right: SIZES.ten, top: SIZES.ten}}
        onPress={props.onPress}
      />
    </View>
  );
};


export default FavListRender;

const styles = StyleSheet.create({
    wrapText: {
      height: '100%',
      width: '100%',
      flexDirection: 'row',
    },
    image: {
      flex: 1,
    },
  
    item: {
      height: imgHeight,
      width: width  * 0.9,
      alignSelf: 'center',
      backgroundColor: COLORS.primary,
      borderRadius: SIZES.ten,
      overflow: 'hidden',
      marginBottom:marginBottomItem,
      flexDirection:'row',
      
    },
    container: {
      flex: 1,
      justifyContent: 'space-evenly',
    },
  });
