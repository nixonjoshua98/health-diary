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

class Home extends React.Component {
  constructor(props) {
    super(props)

    console.log("HeFJDKJFre");

    console.log(props);
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
          <NavButton text="Diary"/>
          <NavButton text="Quotes"/>
          <NavButton text="Home"/>
          <NavButton text="Stats"/>
          <NavButton text="Settings" onPress={() => this.props.navigation.navigate("Settings")}/>
        </Footer>

       </Container>
     )
   }
 }

export default Home;

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
backgroundColor: ${colours.white}
flexDirection: row;
`;
