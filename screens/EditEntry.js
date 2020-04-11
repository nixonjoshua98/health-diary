import React from 'react';


import * as ImagePicker from 'expo-image-picker';

import { TextInput, StyleSheet, AsyncStorage, Image }  from "react-native"

import BigButton from "../components/BigButton"

import styled from 'styled-components';

import NavigationBar from "../components/NavigationBar.js"
import RatingOption from "../components/RatingOption.js"

import { RootView, DiaryEntryView, RatingButton, ColumnRow } from "../styles/Styles.js"

import {default as ExpoConstants} from 'expo-constants';

import Constants from "../common/constants.js"

import Geocode from "react-geocode";

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class EditEntryScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      Text: "",
      Location: null,
      Image: null,

      DiaryID: this.props.navigation.getParam("ID"),

    };
  }

  async LoadData()
  {
    var entries = await AsyncStorage.getItem(Constants.DiaryKey);

    entries = JSON.parse(entries) || [];

    var entry = entries[this.state.DiaryID];

    self.setState(
      {
        Text: entry.Text,
        Image: entry.Image,
        Location: entry.Location
      }
    );
  }

  render() {
    let { Image } = this.state;

      return (
        <RootView>

         <DiaryEntryView>
           <TextInput style={MyStyleSheet.TextInput} multiline={true} onChange={e => this.OnTextUpdate(e)}/>

           <BigButton text="Add Picture" width="150px" background="#0099CC"/>

           <RatingOption ref="options"/>

           <BigButton text="Add Entry" background="#FF9900" onPress={() => this.OnEntrySubmit()}/>
         </DiaryEntryView>

         {Image && <Image source={{ uri: Image }} style={{ alignSelf: 'center', width: 200, height: 200 }} />}

          <NavigationBar nav={this.props.navigation}/>
        </RootView>
      )
    }

    OnTextUpdate(e)
    {
      var v = e.nativeEvent.text

      this.setState( {Text: v} );
    }
 }

 const MyStyleSheet = StyleSheet.create({
   TextInput: {
     backgroundColor: "#0099CC",
     textAlign: 'center',
     fontWeight: "bold",
     fontSize: 16,
     width: "85%",
     height: "35%",
     borderRadius: 25
   }
 })
