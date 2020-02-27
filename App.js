import React from 'react';

// Navigation
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Screens
import Home from "./screens/Home"
import Settings from "./screens/Settings"

const RootStack = createStackNavigator(
  {
    Home: Home,
    Settings: Settings,
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(RootStack);
