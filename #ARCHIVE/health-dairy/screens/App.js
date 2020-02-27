import React from 'react';
import styled from 'styled-components';

import colours from './components/Colours';


export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Titlebar>
          <Avatar />
          <Title>Welcome back,</Title>
          <Name>DR Khaled</Name>
        </Titlebar>
      </Container>
    );
  }
}

const Container = styled.View
`
flex: 1;
background-color: ${colours.background};
justify-content: center;
align-items: center;
`;

const Titlebar = styled.View
`
width: 100%;
margin-top: 50px;
padding-left: 80px;
`;

const Avatar = styled.Image
`
`;

const Title = styled.Text
`
font-size: 20px;
font-weight: 500;
color: ${colours.white}
`;

const Name = styled.Text
`
font-size: 20px;
color: ${colours.red};
font-weight: bold;
`;
