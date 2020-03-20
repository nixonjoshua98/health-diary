import React from 'react';

// Native components
import { ScrollView } from 'react-native';

import styled from 'styled-components';

// Components
import DiaryEntry from "../components/DiaryEntry"
import BigButton from "../components/BigButton"
import Quote from "../components/Quote";

// Navigation objects
import NavButton from "../components/NavButton";
import { NavigationView } from "../styles/Styles.js"

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

          <BigButton text="New Diary Entry" background="#66CCFF"/>

          <NavigationView>
            <NavButton text="Home" onPress={() => this.props.navigation.navigate("Home")}/>
            <NavButton text=""/>
            <NavButton text="Quotes" onPress={() => this.props.navigation.navigate("Quotes")}/>
            <NavButton text="Stats" onPress={() => this.props.navigation.navigate("Stats")}/>
          </NavigationView>

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
backgroundColor: white
`;
