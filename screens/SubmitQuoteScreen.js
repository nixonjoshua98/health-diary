import React from 'react';
import { TextInput, StyleSheet }  from "react-native"

import styled from 'styled-components';

// Components
import colours from '../components/Colours';
import BigButton from "../components/BigButton"
import NavButton from "../components/NavButton";

export default class SubmitQuoteScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
     return (
       <Container>
         <FormStyledView>
          <TextInput style={MyStyleSheet.TextInput} multiline={true}/>

          <BigButton text="Submit"/>

         </FormStyledView>

          <Footer>
            <NavButton text="Home" onPress={() => this.props.navigation.navigate("Home")}/>
            <NavButton text="Diary" onPress={() => this.props.navigation.navigate("Diary")}/>
            <NavButton text="Quotes" onPress={() => this.props.navigation.navigate("Quotes")}/>
            <NavButton text="Stats" onPress={() => this.props.navigation.navigate("Stats")}/>
          </Footer>

       </Container>
     )
   }
 }

const Container = styled.View
`
flex: 1;
backgroundColor: ${colours.white}
`;

const Footer = styled.View
`
display: flex;
align-items: center;
height: 10%;
backgroundColor: ${colours.grey}
flexDirection: row;
`;

const FormStyledView = styled.View
`
flex: 1;
align-items: center;
`;


const MyStyleSheet = StyleSheet.create({
  TextInput: {
    display: "flex",
    backgroundColor: colours.grey,
    justifyContent: "center",
    marginTop: 25,
    marginBottom: 250,
    borderRadius: 25,
    width: "90%",
    height: 200
  }
})