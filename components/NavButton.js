import React from 'react';

import styled from 'styled-components';

const NavButton = props => (
  <ButtonContainer>
    <ButtonText>{props.text}</ButtonText>
  </ButtonContainer>
);

export default NavButton;

const ButtonContainer = styled.TouchableOpacity
`
width: 17%;
height: 75%;
border-radius: 25px;
margin-left: 7px;
backgroundColor: #ffffff;
`

const ButtonText = styled.Text
`
font-size: 12px;
text-align: center;
padding: 15px;
font-weight: bold;
`
