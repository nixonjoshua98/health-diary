import React from 'react';

import { LockView } from "../styles/Styles.js"

import styled from 'styled-components';

import { TextInput, StyleSheet, AsyncStorage  }  from "react-native"

import BigButton from "../components/BigButton"


const PASSCODE_KEY = "user-passcode-7";

export default class LockScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      passcode: null,
      textInput: ""
    };

    this.GetPasscode();
  }

  render() {
     return (
       <LockView>

       { this.RenderWidgets() }

       </LockView>
     )
   }

   RenderWidgets()
   {
     var temp = [];

     // New user
     if (this.state.passcode == null)
     {
       temp.push(<StyledText key={0}>Set your Passcode</StyledText>);
       temp.push(<BigButton key={1}text="Set" background="#FF9900" width="100px" onPress={() => this.OnSetPasscode()}/>);
     }

     // Existing user
     else
     {
       temp.push(<StyledText key={2}>Enter your Passcode</StyledText>);
       temp.push(<BigButton key={3} text="Submit" background="#FF9900" width="100px" onPress={() => this.OnSubmit()}/>);
     }

     temp.splice(1, 0, <TextInput key={4} style={MyStyleSheet.TextInput} value={this.state.inputValue} onChange={e => this.OnTextUpdate(e)}/>)

     return temp;
   }

   OnTextUpdate = (e) =>
   {
     var this_lang_sucks = e.nativeEvent.text

     var md5 = require("md5");

     var hash = md5(this_lang_sucks);

     this.setState((state) => { return {textInput: hash}; });
   }

   OnSetPasscode()
   {
     this.SetPasscode();

     this.props.navigation.navigate("Home");
   }

   OnSubmit()
   {
     if (this.state.textInput === this.state.passcode)
     {
       this.props.navigation.navigate("Home")
     }
   }

   GetPasscode = async () =>
   {
     var v = await AsyncStorage.getItem(PASSCODE_KEY);

     this.setState((state) => { return {passcode: v}; });
   }

   SetPasscode = async () =>
   {
     var v = await AsyncStorage.setItem(PASSCODE_KEY, this.state.textInput);

     this.setState((state) => { return {passcode: v}; });
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
