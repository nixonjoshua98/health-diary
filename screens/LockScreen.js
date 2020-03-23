import React from 'react';

import { LockView } from "../styles/Styles.js"

import styled from 'styled-components';

import { TextInput, StyleSheet, AsyncStorage  }  from "react-native"

import BigButton from "../components/BigButton"

export default class LockScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      passcode: null
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

     if (this.state.passcode == null)
     {
       temp.push(<StyledText>Set your Passcode</StyledText>);
       temp.push(<BigButton text="Submit" background="#FF9900" width="100px" onPress={() => this.SetPasscode()}/>);
     }
     else
     {
       temp.push(<StyledText>Enter your Passcode</StyledText>);
       temp.push(<BigButton text="Submit" background="#FF9900" width="100px" onPress={() => this.CheckPasscode()}/>);
     }

     temp.splice(1, 0, <TextInput style={MyStyleSheet.TextInput}/>)

     return temp;
   }

   GetPasscode = async () =>
   {
     var v = await AsyncStorage.getItem("user-passcode");

     this.setState((state) => { return {passcode: v}; });
   }

   SetPasscode()
   {

   }

   CheckPasscode()
   {
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
