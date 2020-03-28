import React from 'react';

import { TextInput, StyleSheet }  from "react-native"

import BigButton from "../components/BigButton"

import styled from 'styled-components';

import NavigationBar from "../components/NavigationBar.js"

import { RootView, DiaryEntryView, RatingButton, ColumnRow } from "../styles/Styles.js"

export default class CreateDiaryEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      Text: "",
      Rating: null
    }
  }

  render() {
     return (
       <RootView>

        <DiaryEntryView>
          <TextInput style={MyStyleSheet.TextInput} onChange={e => this.OnTextUpdate(e)}/>

          <BigButton text="Add Entry" background="#FF9900" width="150px"/>          
        </DiaryEntryView>

         <NavigationBar nav={this.props.navigation}/>
       </RootView>
     )
   }

   OnTextUpdate = (e) =>
   {
     var v = e.nativeEvent.text

     this.setState((state) => { return {Text: v}; });
   }
 }

 const MyStyleSheet = StyleSheet.create({
   TextInput: {
     display: "flex",
     backgroundColor: "#0099CC",
     textAlign: 'center',
     fontWeight: "bold",
     fontSize: 16,
     width: "85%",
     height: "50%",
     marginTop: 100,
     marginBottom: 50,
     borderRadius: 25
   }
 })
