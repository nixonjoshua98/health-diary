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
      image: null,
      DiaryID: this.props.navigation.getParam("ID"),
    };

    this.LoadData();
  }

  async LoadData()
  {
    var entries = await AsyncStorage.getItem(Constants.DiaryKey);

    entries = JSON.parse(entries) || [];

    var entry = entries[this.state.DiaryID];

    await this.setState(
      {
        Text: entry.Text,
        image: entry.Image,
        Date: entry.Date,
        Rating: entry.Rating,
        Location: entry.Location
      }, () => {}
    );
  }

  _pickImage = async () => {
    if (ExpoConstants.platform.ios)
    {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
    else {
      this.setState({ image: null });
    }
  };

  render() {
    let { image } = this.state;

      return (
        <RootView>

         <DiaryEntryView>
           <TextInput style={MyStyleSheet.TextInput} multiline={true} onChange={e => this.OnTextUpdate(e)}/>

           <BigButton text="Change Picture" width="150px" background="#0099CC" onPress={() => this._pickImage()}/>

           <RatingOption ref="options"/>

           <BigButton text="Update Entry" background="#FF9900" onPress={() => this.OnEntryUpdate()}/>
         </DiaryEntryView>

         {Image && <Image source={{ uri: image }} style={{ alignSelf: 'center', width: 200, height: 200 }} />}

          <NavigationBar nav={this.props.navigation}/>
        </RootView>
      )
    }

    async OnEntryUpdate()
    {
      var rating = this.refs.options.GetRating();

      if (rating === null) {
        alert("Enter a rating");
      }

      else if (this.state.Text.length == 0) {
        alert("Don't forget your text!");
      }

      else {
        var entries = await AsyncStorage.getItem(Constants.DiaryKey);

        entries = JSON.parse(entries) || [];

        entries[this.state.DiaryID] = {
          Text: this.state.Text,
          Rating: this.refs.options.GetRating(),
          Date: this.state.Date,
          Location: this.state.Location,
          Image: this.state.image
        }

        await AsyncStorage.setItem(Constants.DiaryKey, JSON.stringify(entries));

        this.props.navigation.goBack();
      }
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
