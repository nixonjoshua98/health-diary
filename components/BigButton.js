import React from 'react';

import styled from 'styled-components';

// Components
import colours from '../components/Colours';

const BigButton = props => (
  <ButtonContainer>
    <ButtonText onPress={props.onPress}>{props.text}</ButtonText>
  </ButtonContainer>
);

export default BigButton;

const ButtonContainer = styled.TouchableOpacity
`
width: 200px;
height: 35px;
border-radius: 15px;
justify-content: center;
margin: 10px auto 25px auto;
background: ${colours.grey}
`

const ButtonText = styled.Text
`
font-size: 16px;
text-align: center;
padding: 16px;
font-weight: bold;
`
