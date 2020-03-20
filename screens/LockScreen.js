import React from 'react';

import { LockView } from "../styles/Styles.js"

import { TextInput, StyleSheet }  from "react-native"

import BigButton from "../components/BigButton"

export default class LockScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
     return (
       <LockView>

       <TextInput style={MyStyleSheet.TextInput}/>

       <BigButton text="Submit" background="#FF9900" width="100px" onPress={() => this.props.navigation.navigate("Home")}/>

       </LockView>
     )
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
