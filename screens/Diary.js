import React from 'react';

// Native components
import { ScrollView } from 'react-native';

import styled from 'styled-components';

// Components
import DiaryEntry from "../components/DiaryEntry"
import colours from '../components/Colours';
import BigButton from "../components/BigButton"
import Quote from "../components/Quote";
import NavButton from "../components/NavButton";

export default class Diary extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
     return (
       <Container>
          <ScrollView vertical={true}>

          { this.RenderLocalDiaryEntries() }

          </ScrollView>

          <BigButton text="New Diary Entry"/>

          <Footer>
            <NavButton text="Home" onPress={() => this.props.navigation.navigate("Home")}/>
            <NavButton text=""/>
            <NavButton text="Quotes" onPress={() => this.props.navigation.navigate("Quotes")}/>
            <NavButton text="Stats" onPress={() => this.props.navigation.navigate("Stats")}/>
          </Footer>

       </Container>
     )
   }

   RenderLocalDiaryEntries()
   {
     var entries = []

     for (var i = 0; i < 7; i++) {
       entries.push(<DiaryEntry key={i}/>);
     }

     return entries;
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
