import React from 'react';

import styled from 'styled-components';

// Components
import colours from '../components/Colours';

const Quote = props => (
  <Container>
      <QuoteText>{props.text}</QuoteText>
  </Container>
);

export default Quote;

const Container = styled.View
`
background: ${colours.grey};
height: 25px;
border-radius: 10px;
margin: 5px;
align-items: center;
`;

const QuoteText = styled.Text
`
margin-left: 5px;
font-size: 13px;
text-align: center;
padding: 2px 0;
font-weight: bold;
`;
