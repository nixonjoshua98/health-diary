import React from 'react';

import styled from 'styled-components';

const Quote = props => (
  <Container background={props.background}>
      <QuoteText>{props.text}</QuoteText>
  </Container>
);

export default Quote;

const Container = styled.View
`
background: #66CCFF;
height: 50px;
border-radius: 10px;
margin: 5px;
justify-content: center;

background: ${props => props.background ? props.background : "white"}
`;

const QuoteText = styled.Text
`
margin: 5px;
font-size: 13px;
font-weight: bold;
`;
