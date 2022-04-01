import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import {COLORS, FONTFAMILY, FONTS, SIZES, width} from '../constants';

import Icon from 'react-native-vector-icons/Ionicons';

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
      <View style={{flexDirection: 'row', alignItems:'center'}}>
        <Icon name={'search'} size={18} color={COLORS.white} />
        <TextInput
        placeholderTextColor={COLORS.white}
          style={[
            FONTS.boldFont16,
            {
              marginHorizontal: SIZES.ten,
              color: COLORS.white,
              width:'80%'
            },
          ]}
          placeholder={props.placeHolder}
          value={props.value}
          onChangeText={props.onChangeText}
          onSubmitEditing={props.onSubmitEditing}
          keyboardType="web-search"
          returnKeyType="search"
          
        />
        {/* <Text
          numberOfLines={1}
          style={[
            FONTS.boldFont16,
            {
              marginHorizontal: SIZES.ten,
              color: COLORS.white,
            },
          ]}>
          {props.placeHolder}
        </Text> */}
      </View>

      <Icon
        name={'options'}
        type={FONTFAMILY.Ionicons}
        style={{
          color: COLORS.white,
          fontSize: SIZES.h24 * 1.2,

          // marginTop: 5,
        }}
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

    borderWidth: 1.5,
    borderColor: COLORS.grey,
    borderRadius: width,
    marginHorizontal: SIZES.fifteen,
  },
});
