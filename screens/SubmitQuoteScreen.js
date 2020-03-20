import React from 'react';
import { TextInput, StyleSheet }  from "react-native"

import BigButton from "../components/BigButton"

import styled from 'styled-components';

// Navigation objects
import { RootView } from "../styles/Styles.js"

export default class SubmitQuoteScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
     return (
       <RootView>
         <FormStyledView>
          <TextInput style={MyStyleSheet.TextInput} multiline={true}/>

          <BigButton text="Submit" background="#66CCFF"/>

         </FormStyledView>

         <NavigationBar nav={this.props.navigation}/>

       </RootView>
     )
   }
 }

const FormStyledView = styled.View
`
flex: 1;
align-items: center;
`;


const MyStyleSheet = StyleSheet.create({
  TextInput: {
    display: "flex",
    backgroundColor: "grey",
    justifyContent: "center",
    marginTop: 25,
    marginBottom: 250,
    borderRadius: 25,
    width: "90%",
    height: 200
  }
})
