import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {COLORS, SIZES} from '../constants';

import Icon, {Icons} from '../components/Icons';

import HomeScreen from '../screen/Home';
import SearchScreen from '../screen/Search';
import Favourite from '../screen/Favourite';


const TabArr = [
  {
    route: 'HomeTab',
    label: 'Home',
    type: Icons.Feather,
    icon: 'home',
    component: HomeScreen,
    color: COLORS.primary,
    alphaClr: COLORS.transparent,
  },
  {
    route: 'Search',
    label: 'Search',
    type: Icons.Feather,
    icon: 'search',
    component: SearchScreen,
    color: COLORS.primary,
    alphaClr: COLORS.transparent,
  },
  {
    route: 'Add',
    label: 'Favorites',
    type: Icons.Ionicons,
    icon: 'heart',
    component: Favourite,
    color: COLORS.primary,
    alphaClr: COLORS.transparent,
  },

];

const Tab = createBottomTabNavigator();

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const textViewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      // 0.3: { scale: .7 }, 0.5: { scale: .3 }, 0.8: { scale: .7 },
      viewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
      textViewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
    } else {
      viewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
      textViewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, {flex: focused ? 1 : 0.6}]}>
      <View style={{backgroundColor: COLORS.transparent}}>
        <Animatable.View
          ref={viewRef}
          style={[
            StyleSheet.absoluteFillObject,
            {backgroundColor: item.color, borderRadius: 16},
          ]}
        />
        <View
          style={[
            styles.btn,
            {backgroundColor: focused ? COLORS.transparent : item.alphaClr},
          ]}>
          <Icon
            type={item.type}
            name={item.icon}
            color={focused ? COLORS.white : COLORS.primary}
          />

          <Animatable.View ref={textViewRef}>
            {focused && (
              <Text
                style={{
                  color: COLORS.white,
                  paddingHorizontal: 8,
                }}>
                {item.label}
              </Text>
            )}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function AnimTab3() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 5,
          marginHorizontal:SIZES.fifteen,
          // right: 16,
          // left: 16,
          borderRadius: 20,
          // opacity: 0.95,
          // backgroundColor: `${COLORS.white}90`,
        },
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              backgroundColor: COLORS.transparent,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.transparent,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
    opacity: 0.95,
    backgroundColor: COLORS.transparent,
  },
});
