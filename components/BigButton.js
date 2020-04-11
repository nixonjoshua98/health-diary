import React from 'react';

import styled from 'styled-components';


const BigButton = props => (
  <ButtonContainer background={props.background} width={props.width} onPress={props.onPress}>
    <ButtonText>{props.text}</ButtonText>
  </ButtonContainer>
);

export default BigButton;

const ButtonContainer = styled.TouchableOpacity
`
width: ${props => props.width ? props.width : "200px"}
height: 35px;
border-radius: 15px;
justify-content: center;
margin: 5px auto 5px auto;

background: ${props => props.background ? props.background : "grey"}
`

const ButtonText = styled.Text
`
font-size: 16px;
text-align: center;
padding: 16px;
font-weight: bold;
`
