import React from 'react';

import { TextInput, StyleSheet }  from "react-native"

import BigButton from "../components/BigButton"

import styled from 'styled-components';

import NavigationBar from "../components/NavigationBar.js"

import { RootView } from "../styles/Styles.js"

export default class SubmitQuoteScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
     return (
       <RootView>
         <StyledView>
          <TextInput style={MyStyleSheet.TextInput} multiline={true}/>

          <BigButton text="Submit" background="#FF9900"/>

         </StyledView>

         <NavigationBar nav={this.props.navigation}/>

       </RootView>
     )
   }
 }

const StyledView = styled.View
`
flex: 1;
margin-top: 25px;
align-items: center;
`;


const MyStyleSheet = StyleSheet.create({
  TextInput: {
    display: "flex",
    backgroundColor: "#0099CC",
    justifyContent: "center",
    marginTop: 25,
    marginBottom: 250,
    borderRadius: 25,
    width: "90%",
    height: 200
  }
})
