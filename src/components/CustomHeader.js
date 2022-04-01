import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {COLORS, FONTFAMILY, FONTS, SIZES, width} from '../constants';

import Icon, {Icons} from './Icons';


export default function SearchComponent(props) {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'row',
          alignItems: 'center',
        },
        props.style,
      ]}>
      <View style={{flexDirection: 'row'}}>
        <Text
          numberOfLines={1}
          style={[
            FONTS.boldFont20,
            {
              marginHorizontal: SIZES.ten,
              color: COLORS.white,
            },
          ]}>
          {props.title}
        </Text>
      </View>

      <Icon
          type={Icons.Ionicons}
          name={'notifications'}
          color={COLORS.white}
          // style={{position: 'absolute', right: SIZES.ten, top: SIZES.ten}}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SIZES.ten,
    paddingHorizontal: SIZES.fifteen,


  },
});
