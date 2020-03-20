import React from 'react';

import { ScrollView } from 'react-native';

import { RootView } from "../styles/Styles.js"

import NavigationBar from "../components/NavigationBar.js"

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
