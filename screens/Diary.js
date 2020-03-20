import React from 'react';

// Native components
import { ScrollView } from 'react-native';

import DiaryEntry from "../components/DiaryEntry"
import BigButton from "../components/BigButton"
import Quote from "../components/Quote";

import { RootView } from "../styles/Styles.js"

import NavigationBar from "../components/NavigationBar.js"

export default class Diary extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
     return (
       <RootView>
          <ScrollView vertical={true}>

          { this.RenderLocalDiaryEntries() }

          </ScrollView>

          <BigButton text="New Diary Entry" background="#66CCFF"/>

          <NavigationBar nav={this.props.navigation}/>

       </RootView>
     )
   }

   RenderLocalDiaryEntries()
   {
     var entries = []

     for (var i = 0; i < 7; i++) {
       entries.push(<DiaryEntry key={i}/>);
     }

     return entries;
   }
 }
