import React from 'react';

import styled from 'styled-components';

import { Icon } from 'react-native-elements'


const NavButton = props => (
  <Touchable onPress ={props.onPress}>
      <Icon name={props.iconName ? props.iconName : "star"} type="ionicons" />
      <ButtonText>{props.text}</ButtonText>
  </Touchable>
);


export default NavButton;

const Touchable = styled.TouchableOpacity
`
width: 33.333%;
height: 100%;
background: #66CCFF;
justify-content: center;
`

const ButtonText = styled.Text
`
font-size: 15px;
text-align: center;
font-weight: bold;
`

const StyledImage = styled.Image
`
`
