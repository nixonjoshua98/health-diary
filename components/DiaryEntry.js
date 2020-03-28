import React from 'react';

import styled from 'styled-components';

import { Image }  from "react-native"

const DiaryEntry = props => (
  <DiaryEntryView>

    <TextView>

      <Header>
        <Date>{props.date}</Date>
        </Header>

      <DiaryText>{"Really...Really long piece of text filled with lots of lines and text, text and lines and more text and even more text on a different line"}</DiaryText>

      <Footer>
        <Rating>{props.rating}</Rating>
        <Location>{props.location}</Location>
      </Footer>

    </TextView>

    <StyledImage source={ require("../assets/Panda.jpg") }/>

  </DiaryEntryView>
);

export default DiaryEntry;

const DiaryEntryView = styled.View
`
height: 135px;
flex-direction: row;
background: #66CCFF;
align-items: center;
margin: 5px;
`;

const TextView = styled.View
`
flex-direction: column;

background: #0099CC;
height: 100%;
width: 75%;

justify-content: space-between;
`;

const Rating = styled.Text
`
font-weight: bold;
margin: 5px;
`;

const Date = styled.Text
`
font-weight: bold;
margin: 5px;
`;

const Location = styled.Text
`
font-weight: bold;
margin: 5px;
`;

const DiaryText = styled.Text
`
margin: 5px;
`;

const StyledImage = styled.Image
`
width: 100px;
margin: 5px;
height: 100px
borderWidth: 3px;
borderColor: white
`;

const Header = styled.View
`
width: 75%;
margin: 5px;
height: 20px;
flex-direction: row;
background: white;
align-items: center;
border-radius: 10px;
`;

const Footer = styled.View
`
margin: 5px;
height: 20px;
flex-direction: row;
background: white;
justify-content: space-between;
align-items: center;
border-radius: 10px;
`;
