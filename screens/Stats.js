import React from 'react';

// Native components
import { ScrollView } from 'react-native';

import Quote from "../components/Quote";

import NavigationBar from "../components/NavigationBar.js"

import { RootView } from "../styles/Styles.js"

// Testing
const StaticQuotes = [
  { Text: "Quote 0" },
  { Text: "Quote 1" },
  { Text: "Quote 2" },
];

export default class Stats extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
     return (
       <RootView>
          <ScrollView vertical={true}/>

          <NavigationBar nav={this.props.navigation}/>

       </RootView>
     )
   }
 }
