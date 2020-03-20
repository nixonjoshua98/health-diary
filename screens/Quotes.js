import React from 'react';

// Native components
import { ScrollView } from 'react-native';

import styled from 'styled-components';

// Components
import BigButton from "../components/BigButton"
import Quote from "../components/Quote";

// Navigation objects
import NavButton from "../components/NavButton";
import NavigationView from "../styles/Styles.js"

const StaticQuotes = [
  { Text: "Quote 0" },
  { Text: "012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890" },
  { Text: "Quote 2" },
  { Text: "Quote 0" },
  { Text: "Quote 1" },
  { Text: "Quote 2" },
  { Text: "Quote 0" },
  { Text: "Quote 1" },
  { Text: "reallllllllllllllllllllllllllllllllllllllly llllllllllllllllllllllllllooooooooooooooooonnnnnnnnnnnnnnnnngggggggggggggggggg quote sssssssssuuuuuuuuuuuuper long" },
  { Text: "Quote 0" },
  { Text: "Quote 1" },
  { Text: "Quote 2" },
  { Text: "Quote 0" },
  { Text: "Quote 1" },
  { Text: "reallllllllllllllllllllllllllllllllllllllly llllllllllllllllllllllllllooooooooooooooooonnnnnnnnnnnnnnnnngggggggggggggggggg quote sssssssssuuuuuuuuuuuuper long" },
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

          <BigButton text="Create a Quote!" background="#66CCFF" onPress={() => this.props.navigation.push("SubmitQuoteScreen")}/>

          <NavigationView>
            <NavButton text="Home" onPress={() => this.props.navigation.navigate("Home")}/>
            <NavButton text="Diary" onPress={() => this.props.navigation.navigate("Diary")}/>
            <NavButton text=""/>
            <NavButton text="Stats" onPress={() => this.props.navigation.navigate("Stats")}/>
          </NavigationView>

       </Container>
     )
   }

   renderQuotes()
   {
     var temp = []

     StaticQuotes.forEach((quote, i) => {
       if (i % 2 == 0)
       {
         temp.push(<Quote key={i + quote.Text} text={quote.Text} background="#66CCFF"/>)
       }
       else
       {
         temp.push(<Quote key={i + quote.Text} text={quote.Text} background="#0099CC"/>)
       }
     }
   )

     return temp
   }
 }

const Container = styled.View
`
flex: 1;
backgroundColor: white;
`;
