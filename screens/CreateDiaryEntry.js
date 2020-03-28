import React from 'react';

import { TextInput, StyleSheet, AsyncStorage }  from "react-native"

import BigButton from "../components/BigButton"

import styled from 'styled-components';

import NavigationBar from "../components/NavigationBar.js"
import RatingOption from "../components/RatingOption.js"

import { RootView, DiaryEntryView, RatingButton, ColumnRow } from "../styles/Styles.js"

const DIARY_KEY = "@app-diary-2"

export default class CreateDiaryEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      Text: "",
    }
  }

  render() {
     return (
       <RootView>

        <DiaryEntryView>
          <TextInput style={MyStyleSheet.TextInput} onChange={e => this.OnTextUpdate(e)}/>

          <RatingOption ref="options"/>

          <BigButton text="Add Entry" background="#FF9900" width="150px" onPress={() => this.OnEntrySubmit()}/>
        </DiaryEntryView>

         <NavigationBar nav={this.props.navigation}/>
       </RootView>
     )
   }

   OnEntrySubmit()
   {
     var rating = this.refs.options.GetRating();

     if (rating === null) {
       alert("Enter a rating");
     }

     else if (this.state.Text.length == 0) {
       alert("Don't forget your text!");
     }

     else
     {
         this.AppendEntry();

         this.props.navigation.navigate("Diary")
       }
   }

   AppendEntry = async () =>
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

     var text = this.state.Text;
     var rating = this.refs.options.GetRating();

     var today = new Date();
     var dd = String(today.getDate()).padStart(2, '0');
     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
     var yyyy = today.getFullYear();

     var date = mm + '/' + dd + '/' + yyyy;

     entries["entries"].push({Text: text, Rating: rating, Date: date})

     await AsyncStorage.setItem(DIARY_KEY, JSON.stringify(entries));

     console.log(entries);
   }

   OnTextUpdate = (e) =>
   {
     var v = e.nativeEvent.text

     this.setState((state) => { return {Text: v}; });
   }
 }

 const MyStyleSheet = StyleSheet.create({
   TextInput: {
     backgroundColor: "#0099CC",
     textAlign: 'center',
     fontWeight: "bold",
     fontSize: 16,
     width: "85%",
     height: "50%",
     marginBottom: 10,
     borderRadius: 25
   }
 })
