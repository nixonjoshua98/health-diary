import React from 'react';

import { LockView } from "../styles/Styles.js"

import styled from 'styled-components';

import { TextInput, StyleSheet }  from "react-native"

import BigButton from "../components/BigButton"

export default class LockScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
     return (
       <LockView>

       <StyledText>Passcode</StyledText>

       <TextInput style={MyStyleSheet.TextInput}/>

       <BigButton text="Submit" background="#FF9900" width="100px" onPress={() => this.OnSubmitPress()}/>

       </LockView>
     )
   }

   OnSubmitPress()
   {
     const fs = require('fs-extra')

     const file = "../data/dont-look-here.txt"

     this.props.navigation.navigate("Home")
   }
 }

 const MyStyleSheet = StyleSheet.create({
   TextInput: {
     display: "flex",
     backgroundColor: "#0099CC",
     textAlign: 'center',
     fontWeight: "bold",
     fontSize: 16,
     width: "50%",
     marginBottom: 50,
     borderRadius: 25
   }
 })

 const StyledText = styled.Text
 `
 font-size: 16px;
 text-align: center;
 padding: 16px;
 font-weight: bold;
 `
