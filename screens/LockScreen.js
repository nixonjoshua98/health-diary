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
      EnteredPassword: null,
      EnteredHash: null,
      NewUser: false,
      LoggedIn: false,

      ChangingPassword: false,

      CurrentPassword: null,
      NewPassword: null,

      NewPasswordHash: null,
      CurrentPasswordHash: null
    };

    this.diary = props.diary;

    this.SetState_SavedHash_NewUser();
  }

  render() {``
    const NewUser = this.state.NewUser;
    const ChangingPassword = this.state.ChangingPassword;

    if (ChangingPassword)
    {
      return (
        <LockView>
            <StyledText>Current Password</StyledText>
            <TextInput style={MyStyleSheet.PasswordInput} value={this.state.CurrentPassword} onChange={e => this.OnCurrentPasswordTextUpdate(e)}/>

            <StyledText>New Password</StyledText>
            <TextInput style={MyStyleSheet.PasswordInput} value={this.state.NewPassword} onChange={e => this.OnNewPasswordTextUpdate(e)}/>

            <ColumnRow>
              <BigButton text="Change" key={19} width="100px" background="#FF9900" onPress={() => this.OnConfirmChange()}/>
              <BigButton text="Cancel" key={20} width="100px" background="#FF9900" onPress={() => this.OnCancelPasswordChange()}/>
            </ColumnRow>

        </LockView>
      )
    }

    else {
      return (
        <LockView>
            {
              NewUser ? <StyledText>Welcome, Set Your Password :)</StyledText>
              : <StyledText>Welcome Back!</StyledText>
            }

            <TextInput style={MyStyleSheet.PasswordInput} value={this.state.EnteredPassword} onChange={e => this.OnTextUpdate(e)}/>

            {
              NewUser ?
              <BigButton text="Set" key={2} background="#FF9900" onPress={() => this.OnSetNewPassword()}/>
              :
              <BigButton text="Login" key={1} background="#FF9900" onPress={() => this.AsyncOnLogin()}/>
            }
            {
              NewUser ?
              null
              :
              <BigButton text="Change Password" key={2} background="#FF9900" onPress={() => this.OnChangePassword()}/>
            }

        </LockView>
      )
    }
  }

  OnCurrentPasswordTextUpdate(e)
  {
    var hash = this.HashString(e.nativeEvent.text)

    this.setState( {CurrentPassword: hash} );
  }

  OnNewPasswordTextUpdate(e)
  {
    var hash = this.HashString(e.nativeEvent.text)

    this.setState( {NewPassword: e.nativeEvent.text} );
    this.setState( {NewPasswordHash: hash} );
  }

  OnCurrentPasswordTextUpdate(e)
  {
    var hash = this.HashString(e.nativeEvent.text)

    this.setState( {CurrentPassword: e.nativeEvent.text} );
    this.setState( {CurrentPasswordHash: hash} );
  }

   OnTextUpdate(e)
   {
     var hash = this.HashString(e.nativeEvent.text)

     this.setState( {EnteredPassword: e.nativeEvent.text} );
     this.setState( {EnteredHash: hash} );
   }

   OnConfirmChange()
   {
     if (this.state.CurrentPasswordHash === this.state.SavedHash)
     {
       if (this.state.NewPasswordHash == null)
       {
         alert("New password cannot be blank")
         return
       }

       this.setState({SavedHash: this.state.NewPasswordHash})

       this.ChangePassword();

       this.OnCancelPasswordChange();
     }
   }

   async ChangePassword()
   {
     await AsyncStorage.setItem(Constants.PasswordKey, this.state.NewPasswordHash);
   }

   OnCancelPasswordChange()
   {
     this.setState({ChangingPassword: false});

     this.setState({CurrentPasswordHash: null})
     this.setState({CurrentPassword: null})

     this.setState({NewPassword: null} );
     this.setState({NewPasswordHash: null})

     this.setState({EnteredPassword: null})
   }

   OnChangePassword()
   {
     this.setState({ChangingPassword: true});
   }

   OnSetNewPassword()
   {
     this.SaveNewHash();

     this.SetState_SavedHash_NewUser();
   }

   async AsyncOnLogin()
   {
     if (this.state.EnteredHash === this.state.SavedHash)
     {
       this.diary.setState( {LoggedIn: true} );

       await AsyncStorage.setItem(Constants.LoggedInKey, JSON.stringify(true));
     }
   }

   SetState_SavedHash_NewUser = async () =>
   {
     var v = await AsyncStorage.getItem(Constants.PasswordKey);

     await AsyncStorage.setItem(Constants.LoggedInKey, JSON.stringify(false));


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

const ColumnRow = styled.View
`
width: 50%;
flexDirection: row;
justify-content: space-between;
`
