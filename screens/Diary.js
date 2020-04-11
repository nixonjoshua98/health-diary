import React from 'react';

// Native components
import { ScrollView, AsyncStorage } from 'react-native';

import DiaryEntry from "../components/DiaryEntry"
import BigButton from "../components/BigButton"
import Quote from "../components/Quote";

import { RootView } from "../styles/Styles.js"

import NavigationBar from "../components/NavigationBar.js"

import Constants from "../common/constants.js"

export default class Diary extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      entries: []
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

   componentWillUnmount() {
     this.setState = (state, callback) => {
       return;
     };
   }

   LoadEntries = async () =>
   {
     var entries = await AsyncStorage.getItem(Constants.DiaryKey);

     entries = JSON.parse(entries);

     this.setState( {entries: entries || [] } );
   }

   RenderDiaryEntries()
   {
     var entries = [];

     var buttonText = ["Bad", "Meh", "OK", "Good", "Best"];

     this.LoadEntries();

     for (var i = this.state.entries.length - 1; i > 0; i--) {
       var e = this.state.entries[i];

       entries.push(<DiaryEntry image={e.Image} key={i} text={e.Text} date={e.Date} location={e.Location} rating={buttonText[parseInt(e.Rating)]}/>);
     }

     return entries;
   }
 }
