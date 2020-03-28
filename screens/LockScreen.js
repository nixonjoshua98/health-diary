import React from 'react';

import { LockView, ColumnFlex } from "../styles/Styles.js"

import styled from 'styled-components';

import { TextInput, StyleSheet, AsyncStorage  }  from "react-native"

import BigButton from "../components/BigButton"


const PASSCODE_KEY = "@app-6";

export default class LockScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      passcode: null,
      textInput: "",
    };

    this.GetPasscode();
  }

  render() {
     return (
       <LockView>

       {this.TitleText()}

       <TextInput style={MyStyleSheet.TextInput} onChange={e => this.OnTextUpdate(e)}/>

       <ColumnFlex>
       {this.SubmitButton()}
       </ColumnFlex>

       </LockView>
     )
   }

   TitleText()
   {
     if (this.state.passcode !== null)
     {
       return <StyledText>Enter Password</StyledText>
     }

     return <StyledText>Set Password</StyledText>
   }

   SubmitButton()
   {
     if (this.state.passcode !== null)
     {
       var buttons = []
       buttons.push(<BigButton text="Login" background="#FF9900" width="150px" onPress={() => this.OnLogin()}/>);
       return buttons;
     }

     return <BigButton text="Set" background="#FF9900" width="150px" onPress={() => this.OnSetPasscode()}/>;
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
     this.GetPasscode();
   }

   OnLogin()
   {
     if (this.state.textInput === this.state.passcode)
     {
       this.props.navigation.navigate("Diary")
     }
   }

   GetPasscode = async () =>
   {
     var v = await AsyncStorage.getItem(PASSCODE_KEY);

     this.setState((state) => { return {passcode: v}; });
   }

   SetPasscode = async () =>
   {
     await AsyncStorage.setItem(PASSCODE_KEY, this.state.textInput);
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
