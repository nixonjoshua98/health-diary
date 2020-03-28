import React from 'react';

// Native components
import { ScrollView, AsyncStorage } from 'react-native';

import DiaryEntry from "../components/DiaryEntry"
import BigButton from "../components/BigButton"
import Quote from "../components/Quote";

import { RootView } from "../styles/Styles.js"

import NavigationBar from "../components/NavigationBar.js"

const DIARY_KEY = "@app-diary-2"

export default class Diary extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      entries: null
    };
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

   LoadEntries = async () =>
   {
     var entries = await AsyncStorage.getItem(DIARY_KEY);

     if (entries === null)
     {
       entries = {entries: []};
     }
     else
     {
       entries = JSON.parse(entries);
     }

     this.setState((state) => { return {entries: entries}; });
   }

   RenderDiaryEntries()
   {
     this.LoadEntries();

     if (this.state.entries === null)
     {
       return;
     }

     var entries = [];

     for (var i = 0; i < this.state.entries.entries.length; i++) {
       var e = this.state.entries.entries[i];

       entries.push(<DiaryEntry key={i} text={e.Text} date={e.Date} location={"London"} rating={"Rating: " + (parseInt(e.Rating) + 1)}/>);
     }

     return entries;
   }
 }
