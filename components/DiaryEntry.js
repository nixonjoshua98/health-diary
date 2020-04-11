import React from 'react';

import { Image }  from "react-native"

import styled from 'styled-components';

import BigButton from "../components/BigButton"

const DiaryEntry = props => (
  <DiaryEntryView>

    <TextView>

      <Header>
        <Date>{props.date}</Date>
        <Button text="Edit" width="50px" onPress={props.onPress}/>
      </Header>

      <DiaryText>{props.text}</DiaryText>

      <Footer>
        <Rating>{props.rating}</Rating>
        <Location>{props.location}</Location>
      </Footer>

    </TextView>

    {
      props.image === null ?
      null : <StyledImage source={{ uri: props.image }}/>
    }

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

const Button = props => (
  <ButtonContainer background={props.background} width={props.width} onPress={props.onPress}>
    <ButtonText>{props.text}</ButtonText>
  </ButtonContainer>
);

const ButtonContainer = styled.TouchableOpacity
`
width: ${props => props.width ? props.width : "200px"}
height: 20px;
border-radius: 15px;
justify-content: center;
margin: 0px;

background: ${props => props.background ? props.background : "#FF9900"}
`

const ButtonText = styled.Text
`
font-size: 10px;
text-align: center;
font-weight: bold;
`


const TextView = styled.View
`
flex-direction: column;

background: #0099CC;
height: 100%;
width: 65%;

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
width: 35%;
height: 100%;
`;

const Header = styled.View
`
width: 75%;
margin: 5px;
height: 20px;
flex-direction: row;
background: white;
align-items: center;
justify-content: space-between;
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
