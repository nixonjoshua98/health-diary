import React from 'react';

// Native components
import { ScrollView } from 'react-native';

import styled from 'styled-components';

import Quote from "../components/Quote";

// Navigation objects
import NavButton from "../components/NavButton";
import NavigationView from "../styles/Styles.js"

// Testing
const StaticQuotes = [
  { Text: "Quote 0" },
  { Text: "Quote 1" },
  { Text: "Quote 2" },
];

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
     return (
       <Container>

        <NavigationView>
          <NavButton text=""/>
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
