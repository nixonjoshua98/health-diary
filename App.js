import React from 'react';

// Navigation
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Screens
import SubmitQuoteScreen from "./screens/SubmitQuoteScreen.js"
import Diary from "./screens/Diary.js"
import Quotes from "./screens/Quotes.js"
import Stats from "./screens/Stats.js"
import LockScreen from "./screens/LockScreen.js"
import EditEntryScreen from "./screens/EditEntry.js"
import CreateDiaryEntry from "./screens/CreateDiaryEntry.js"

const RootStack = createStackNavigator(
  {
    Diary: { screen: Diary },
    Quotes: { screen: Quotes },
    Stats: { screen: Stats },

    Edit: { screen: EditEntryScreen, navigationOptions: {title: "Edit Diary Entry"} },

    SubmitQuoteScreen: { screen: SubmitQuoteScreen, navigationOptions: {title: "Submit Quote"} },
    CreateDiaryEntry: { screen: CreateDiaryEntry, navigationOptions: {title: "Create Diary Entry"} }
  },

  {
    initialRouteName: "Diary",
  }
);

export default createAppContainer(RootStack);
