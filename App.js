import React from 'react';

// Navigation
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Screens
import SubmitQuoteScreen from "./screens/SubmitQuoteScreen"
import Diary from "./screens/Diary"
import Quotes from "./screens/Quotes"
import Stats from "./screens/Stats"
import Home from "./screens/Home"

const RootStack = createStackNavigator(
  {
    Home: {screen: Home},
    Diary: {screen: Diary},
    Quotes: {screen: Quotes},
    Stats: {screen: Stats},

    SubmitQuoteScreen: { screen: SubmitQuoteScreen }
  },

  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(RootStack);
