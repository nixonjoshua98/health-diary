import React from 'react';

import { TextInput, StyleSheet, AsyncStorage }  from "react-native"

import BigButton from "../components/BigButton"

import styled from 'styled-components';

import NavigationBar from "../components/NavigationBar.js"
import RatingOption from "../components/RatingOption.js"

import { RootView, DiaryEntryView, RatingButton, ColumnRow } from "../styles/Styles.js"

import Constants from "../common/constants.js"

import Geocode from "react-geocode";

import { Camera } from 'expo-camera';

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
    }


    this.SetState_Location();
  }

  render() {
    return (
      <RootView>
          <Camera style={styles.camera}/>
      </RootView>
    )
     return (
       <RootView>

        <DiaryEntryView>
          <TextInput style={MyStyleSheet.TextInput} multiline={true} onChange={e => this.OnTextUpdate(e)}/>

          <StandardButton text="Add Picture" onPress={() => this.OnAddPicture()}></StandardButton>

          <RatingOption ref="options"/>

          <BigButton text="Add Entry" background="#FF9900" width="150px" onPress={() => this.OnEntrySubmit()}/>
        </DiaryEntryView>

         <NavigationBar nav={this.props.navigation}/>
       </RootView>
     )
   }

   async OnAddPicture()
   {
     const { status } = await Permissions.askAsync(Permissions.CAMERA);

     if (status !== 'granted')
     {
       alert("Camera permission is a requirement to add a picture");
     }
     else {

     }
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
         Location: this.state.Location
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
     height: "50%",
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

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    justifyContent: 'space-between',
  }
})
