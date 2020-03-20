import React from 'react';

// Native components
import { ScrollView } from 'react-native';

import Quote from "../components/Quote";

import { RootView } from "../styles/Styles.js"

import NavigationBar from "../components/NavigationBar.js"

// Testing
const StaticQuotes = [
  { Text: "Quote 0" },
  { Text: "Quote 1" },
  { Text: "Quote 2" },
];

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
     return (
       <RootView>
        <ScrollView vertical={true}>

        </ScrollView>

        <NavigationBar nav={this.props.navigation}/>

       </RootView>
     )
   }
 }
