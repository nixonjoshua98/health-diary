import React from 'react';


import * as ImagePicker from 'expo-image-picker';

import { TextInput, StyleSheet, AsyncStorage, Image }  from "react-native"

import BigButton from "../components/BigButton"

import styled from 'styled-components';

import NavigationBar from "../components/NavigationBar.js"
import RatingOption from "../components/RatingOption.js"
import PhotoGallery from "../components/PhotoGallery.js"

import { RootView, DiaryEntryView, RatingButton, ColumnRow } from "../styles/Styles.js"

import {default as ExpoConstants} from 'expo-constants';

import Constants from "../common/constants.js"

import Geocode from "react-geocode";

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const StandardButton = props => (
  <ButtonContainer onPress={props.onPress} background={props.background}>
    <ButtonText>{props.text}</ButtonText>
  </ButtonContainer>
);

export default class CreateDiaryEntry extends React.Component {
  constructor(props) {
    super(props)

    Geocode.setApiKey("AIzaSyDFIRntSQKV27tuktCvwNr4LVUqT5X7BGQ");

    this.state = {
      Text: "",
      Location: null,
      image: null
    }

    this.SetState_Location();
  }

  render() {
    let { image } = this.state;

      return (
        <RootView>

         <DiaryEntryView>
           <TextInput style={MyStyleSheet.TextInput} multiline={true} onChange={e => this.OnTextUpdate(e)}/>

           <StandardButton text="Add Picture" onPress={() => this._pickImage()}></StandardButton>

           <RatingOption ref="options"/>

           <BigButton text="Add Entry" background="#FF9900" width="150px" onPress={() => this.OnEntrySubmit()}/>
         </DiaryEntryView>

         {image && <Image source={{ uri: image }} style={{ alignSelf: 'center', width: 200, height: 200 }} />}

          <NavigationBar nav={this.props.navigation}/>
        </RootView>
      )
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
       this.SaveDiaryEntry();

       this.props.navigation.navigate("Diary")
     }
   }

   async SetState_Location()
   {
     let { status } = await Permissions.askAsync(Permissions.LOCATION);

     if (status !== 'granted') {
       return alert("Location Permission Not granted")
     }

     var location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});

     Geocode.fromLatLng(location.coords.latitude, location.coords.longitude)
     .then( response => {
       var addr = response.results[0].formatted_address;

       var city = addr.split(",")[1].split(" ")[1]

       this.setState({Location: city });

   }).catch((error) => { console.log('geocode error: ' + error); })
 };

   async SaveDiaryEntry()
   {
     var entries = await AsyncStorage.getItem(Constants.DiaryKey);

     entries = JSON.parse(entries) || [];

     entries.push(
       {
         Text: this.state.Text,
         Rating: this.refs.options.GetRating(),
         Date: this.GetDateString(),
         Location: this.state.Location,
         Image: this.state.image
        }
      )

     await AsyncStorage.setItem(Constants.DiaryKey, JSON.stringify(entries));
   }

   GetDateString()
   {
     var today = new Date();

     var dd = String(today.getDate()).padStart(2, '0');
     var mm = String(today.getMonth() + 1).padStart(2, '0');
     var yyyy = today.getFullYear();

     return dd + '/' + mm + '/' + yyyy;
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
     marginBottom: 10,
     borderRadius: 25
   }
 })

 const ButtonContainer = styled.TouchableOpacity
 `
height: 35px;
justify-content: center;
borderRadius: 25px;
background: ${props => props.background ? props.background : "#66CCFF"}
margin: 20px;
 `

const ButtonText = styled.Text
`
font-size: 16px;
text-align: center;
padding: 16px;
font-weight: bold;
`
