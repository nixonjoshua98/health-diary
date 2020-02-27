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
width: 17%;
height: 75%;
border-radius: 25px;
margin-left: 2.5%;
backgroundColor: ${colours.grey};
`

const ButtonText = styled.Text
`
font-size: 12px;
text-align: center;
padding: 24px;
font-weight: bold;
`
