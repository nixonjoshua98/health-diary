import React from 'react';

import styled from 'styled-components';

const NavButton = props => (
  <Touchable onPress = {props.onPress}>
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
font-size: 16px;
text-align: center;
font-weight: bold;
`
