import React from 'react';

import styled from 'styled-components';

// Components
import colours from '../components/Colours';

const NavButton = props => (
  <ButtonContainer>
    <ButtonText onPress = {props.onPress}>{props.text}</ButtonText>
  </ButtonContainer>
);

export default NavButton;

const ButtonContainer = styled.TouchableOpacity
`
width: 22%;
height: 75%;
margin-left: 2.5%;
`

const ButtonText = styled.Text
`
font-size: 16px;
text-align: center;
padding: 16px;
font-weight: bold;
`
