import React from 'react';
import { TextInput, StyleSheet }  from "react-native"

import styled from 'styled-components';

import BigButton from "../components/BigButton"

// Navigation objects
import NavButton from "../components/NavButton";
import NavigationView from "../styles/Styles.js"

export default class SubmitQuoteScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
     return (
       <Container>
         <FormStyledView>
          <TextInput style={MyStyleSheet.TextInput} multiline={true}/>

          <BigButton text="Submit" background="#66CCFF"/>

         </FormStyledView>

          <NavigationView>
            <NavButton text="Home" onPress={() => this.props.navigation.navigate("Home")}/>
            <NavButton text="Diary" onPress={() => this.props.navigation.navigate("Diary")}/>
            <NavButton text="Quotes" onPress={() => this.props.navigation.navigate("Quotes")}/>
            <NavButton text="Stats" onPress={() => this.props.navigation.navigate("Stats")}/>
          </NavigationView>

       </Container>
     )
   }
 }

const Container = styled.View
`
flex: 1;
backgroundColor: white;
`;

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
