import React from 'react';

// Navigation
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Screens
import SubmitQuoteScreen from "./screens/SubmitQuoteScreen.js"
import Diary from "./screens/Diary.js"
import Quotes from "./screens/Quotes.js"
import Stats from "./screens/Stats.js"
import Home from "./screens/Home.js"
import LockScreen from "./screens/LockScreen.js"

const RootStack = createStackNavigator(
  {
    Lock: {screen: LockScreen},
    Home: {screen: Home},
    Diary: {screen: Diary},
    Quotes: {screen: Quotes},
    Stats: {screen: Stats},

    SubmitQuoteScreen: { screen: SubmitQuoteScreen }
  },

  {
    initialRouteName: "Lock",
    headerMode: "none",
  }
);

export default createAppContainer(RootStack);
