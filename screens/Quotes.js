import React from 'react';

// Native components
import { ScrollView } from 'react-native';

import styled from 'styled-components';

// Components
import colours from '../components/Colours';
import BigButton from "../components/BigButton"
import Quote from "../components/Quote";
import NavButton from "../components/NavButton";

const StaticQuotes = [
  { Text: "Quote 0" },
  { Text: "Quote 1" },
  { Text: "Quote 2" },
  { Text: "Quote 0" },
  { Text: "Quote 1" },
  { Text: "Quote 2" },
  { Text: "Quote 0" },
  { Text: "Quote 1" },
  { Text: "Quote 2" },
  { Text: "Quote 0" },
  { Text: "Quote 1" },
  { Text: "Quote 2" },
  { Text: "Quote 0" },
  { Text: "Quote 1" },
  { Text: "Quote 2" },
  { Text: "Quote 0" },
  { Text: "Quote 1" },
  { Text: "Quote 2" },
  { Text: "Quote 0" },
  { Text: "Quote 1" },
  { Text: "Quote 2" },
  { Text: "Quote 0" },
  { Text: "Quote 1" },
  { Text: "Quote 2" },
  { Text: "Quote 0" },
  { Text: "Quote 1" },
  { Text: "Quote 2" },
];

export default class Quotes extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
     return (
       <Container>
          <ScrollView vertical={true}>
            { this.renderQuotes() }
          </ScrollView>

          <BigButton text="Create a Quote!" onPress={() => this.props.navigation.push("SubmitQuoteScreen")}/>

          <Footer>
            <NavButton text="Home" onPress={() => this.props.navigation.navigate("Home")}/>
            <NavButton text="Diary" onPress={() => this.props.navigation.navigate("Diary")}/>
            <NavButton text=""/>
            <NavButton text="Stats" onPress={() => this.props.navigation.navigate("Stats")}/>
          </Footer>

       </Container>
     )
   }

   renderQuotes()
   {
     var temp = []

     StaticQuotes.forEach((quote, i) => { temp.push(<Quote key={i + quote.Text} text={quote.Text}/>) } )

     return temp
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
