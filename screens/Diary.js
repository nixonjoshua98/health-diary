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

          { this.RenderDiaryEntries() }

          </ScrollView>

          <BigButton text="New Diary Entry" background="#FF9900" onPress={() => this.props.navigation.push("CreateDiaryEntry")}/>

          <NavigationBar nav={this.props.navigation}/>

       </RootView>
     )
   }

   RenderDiaryEntries()
   {
     var entries = []

     for (var i = 0; i < 7; i++) {
       entries.push(<DiaryEntry key={i} date={"Today"} location={"London"} rating={"Noice"}/>);
     }

     return entries;
   }
 }
