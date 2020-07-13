// Navigation/Navigations.js

import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator} from 'react-navigation-tabs'
import { createStackNavigator} from 'react-navigation-stack'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'
import LoginScreen from '../Screens/LoginScreen'
import RegisterScreen from '../Screens/RegisterScreen'
import LoadingScreen from '../Screens/LoadingScreen'
import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBVsEH8UcGYGVSNh9osfyZVZB74dpni4Oc",
  authDomain: "reactnative-30296.firebaseapp.com",
  databaseURL: "https://reactnative-30296.firebaseio.com",
  projectId: "reactnative-30296",
  storageBucket: "reactnative-30296.appspot.com",
  messagingSenderId: "417088417313",
  appId: "1:417088417313:web:9380e934488129c193bd60"
};
 firebase.initializeApp(firebaseConfig);

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  FilmDetail: {
    screen: FilmDetail
  }
})

const FavoritesStackNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favoris'
    }
  },
  FilmDetail: {
    screen: FilmDetail
  }
})

const MoviesTabNavigator = createBottomTabNavigator(
  {
    Search: {
      screen: SearchStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_search.png')}
            style={styles.icon}/>
        }
      }
    },
    Favorites: {
      screen: FavoritesStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_favorite.png')}
            style={styles.icon}/>
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeBackgroundColor: '#DDDDDD',
      inactiveBackgroundColor: '#FFFFFF',
      showLabel: false,
      showIcon: true
    }
  }
)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})
export const App = createSwitchNavigator(
  {
    LoadingScreen,
    RegisterScreen,
    LoginScreen,
    Search
  },
  {
    initialRouteName: 'LoadingScreen'
  }
)

export default createAppContainer(MoviesTabNavigator) 