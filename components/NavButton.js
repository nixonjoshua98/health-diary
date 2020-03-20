import React from 'react';

import styled from 'styled-components';

const NavButton = props => (
  <Touchable>
    <ButtonText onPress = {props.onPress}>{props.text}</ButtonText>
  </Touchable>
);


export default NavButton;

const Touchable = styled.TouchableOpacity
`
width: 22%;
height: 75%;
margin-left: 2.5%;
border-radius: 20px;
background: #66CCFF;
`

const ButtonText = styled.Text
`
font-size: 16px;
text-align: center;
padding: 16px;
font-weight: bold;
`
