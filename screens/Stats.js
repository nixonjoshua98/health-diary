import React from 'react';

// Native components
import { ScrollView } from 'react-native';

import styled from 'styled-components';

// Components
import colours from '../components/Colours';
import Quote from "../components/Quote";
import NavButton from "../components/NavButton";

// Styles
import { NavigationBar } from "../styles/NavigationBar.js"

// Testing
const StaticQuotes = [
  { Text: "Quote 0" },
  { Text: "Quote 1" },
  { Text: "Quote 2" },
];

export default class Stats extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
     return (
       <Container>
          <ScrollView vertical={true}/>

          <Footer>
            <NavButton text="Home" onPress={() => this.props.navigation.navigate("Home")}/>
            <NavButton text="Diary" onPress={() => this.props.navigation.navigate("Diary")}/>
            <NavButton text="Quotes" onPress={() => this.props.navigation.navigate("Quotes")}/>
            <NavButton text=""/>
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
