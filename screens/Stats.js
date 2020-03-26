import React from 'react';

import { ScrollView } from 'react-native';

import Quote from "../components/Quote";

import NavigationBar from "../components/NavigationBar.js"

import { RootView } from "../styles/Styles.js"

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
