import React from 'react';

import { LockView, ColumnFlex } from "../styles/Styles.js"

import styled from 'styled-components';

import { TextInput, StyleSheet, AsyncStorage  }  from "react-native"

import BigButton from "../components/BigButton"

import Constants from "../common/constants.js"

export default class LockScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      SavedHash: null,
      EnteredHash: null,
      NewUser: false,

      LoggedIn: false
    };

    this.SetState_SavedHash_NewUser();
  }

  render() {
    const NewUser = this.state.NewUser;

    return (
      <LockView>
          {
            NewUser ? <StyledText>Welcome, Set Your Password :)</StyledText>
            : <StyledText>Welcome Back!</StyledText>
          }

          <TextInput style={MyStyleSheet.PasswordInput} onChange={e => this.OnTextUpdate(e)}/>

          {
            NewUser ?
            <BigButton text="Set" key={2} background="#FF9900" onPress={() => this.OnSetNewPassword()}/>
            : <BigButton text="Login" key={1} background="#FF9900" onPress={() => this.OnLogin()}/>
          }
      </LockView>
    )
  }

   OnTextUpdate(e)
   {
     var hash = this.HashString(e.nativeEvent.text)

     this.setState( {EnteredHash: hash} );
   }

   OnSetNewPassword()
   {
     this.SaveNewHash();

     this.SetState_SavedHash_NewUser();
   }

   OnLogin()
   {
     if (this.state.EnteredHash === this.state.SavedHash)
     {
       this.props.navigation.push("MentalHealthDiary")
     }
   }

   SetState_SavedHash_NewUser = async () =>
   {
     var v = await AsyncStorage.getItem(Constants.PasswordKey);

     /*
     This is stupid, why can I not simply call two methods from elsehwere without one of them not updating the setState,
     but instead have to use the callback to set something else.
     */
     this.setState( {SavedHash: v}, () => {
       var isNewUser = this.state.SavedHash === null;

       this.setState( {NewUser: isNewUser} );
     });
   }

   SaveNewHash = async () =>
   {
     await AsyncStorage.setItem(Constants.PasswordKey, this.state.EnteredHash);
   }

   HashString(str)
   {
     var md5 = require("md5");

     return md5(str);
   }
 }

 const MyStyleSheet = StyleSheet.create({
   PasswordInput: {
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
