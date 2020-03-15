import React from 'react';
import { TextInput }  from "react-native"

import styled from 'styled-components';

// Components
import colours from '../components/Colours';
import NavButton from "../components/NavButton";

export default class SubmitQuoteScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
     return (
       <Container>
         <Container>
          <TextInput multiline={true}/>
         </Container>

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