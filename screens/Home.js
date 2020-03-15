import React from 'react';

// Native components
import { ScrollView } from 'react-native';

import styled from 'styled-components';

// Components
import colours from '../components/Colours';
import Quote from "../components/Quote";
import NavButton from "../components/NavButton";

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

          <ScrollView vertical={true}>

            {
              StaticQuotes.map((quote, index) => (
                <Quote key={index + quote.Text} text={quote.Text}/>))
            }

          </ScrollView>

        <Footer>
          <NavButton text=""/>
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
