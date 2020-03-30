import React from 'react';

import { TextInput, StyleSheet, AsyncStorage }  from "react-native"

import BigButton from "../components/BigButton"

import styled from 'styled-components';

import NavigationBar from "../components/NavigationBar.js"
import RatingOption from "../components/RatingOption.js"

import { RootView, DiaryEntryView, RatingButton, ColumnRow } from "../styles/Styles.js"

import Geocode from "react-geocode";

import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const DIARY_KEY = "@app-diary-5"

export default class CreateDiaryEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      Text: "",
      location: null
    }

    if (Platform.OS === 'android' && !Constants.isDevice) {

    }
    else
    {
      this.getLocationAsync();
    }
  }

  render() {
     return (
       <RootView>

        <DiaryEntryView>
          <TextInput style={MyStyleSheet.TextInput} multiline={true} onChange={e => this.OnTextUpdate(e)}/>

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

   getLocationAsync = async () => {
     let { status } = await Permissions.askAsync(Permissions.LOCATION);

     if (status !== 'granted') {
       return;
     }

     var location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});

     // Google maps
     Geocode.setApiKey("AIzaSyDFIRntSQKV27tuktCvwNr4LVUqT5X7BGQ");

     Geocode.fromLatLng(location.coords.latitude, location.coords.longitude)
     .then( response => {
       var loc = response.results[0].formatted_address;
       var split = loc.split(",")

       var city = split[1].split(" ")[1]

       this.setState((state) => { return {location: split[0] + ", " + city };
     });
   }).catch((error) => { console.log('geocode error: ' + error); })
 };

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
     var loc = this.state.location

     var today = new Date();
     var dd = String(today.getDate()).padStart(2, '0');
     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
     var yyyy = today.getFullYear();

     var date = dd + '/' + mm + '/' + yyyy;

     entries["entries"].push({Text: text, Rating: rating, Date: date, Location: loc})

     await AsyncStorage.setItem(DIARY_KEY, JSON.stringify(entries));
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
