import React from 'react';
import { ScrollView } from 'react-native';

import styled from 'styled-components';

import colours from './components/Colours';

import Categories from './components/Categories';

import { Ionicons } from '@expo/vector-icons'

const items = [
  { text: 'Avengers |'},
  { text: 'Thor |' },
  { text: 'Ironman |' },
  { text: 'Captain America |' },
  { text: 'Guardians |' },
  { text: 'Black Widow ' },
  { text: 'Hawkeye ' }
];

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <ScrollView>
          <Titlebar>
            <Avatar source={require('./assets/avatar.png')} />
            <Title>Welcome back,</Title>
            <Name>DR Khaled</Name>

            <Ionicons
                    name="md-cart"
                    size={32}
                    color={colours.red}
                    style={{ position: 'absolute', right: 20, top: 5 }}
              />

              <ScrollView horizontal={true}
                      style={{
                        padding: 20,
                        paddingLeft: 12,
                        paddingTop: 30,
                        flexDirection: 'row'
                      }}
                      showsHorizontalScrollIndicator={false}>

                      {
                        items.map((category, index) =>
                        (<Categories name={category.text} key={index} />))
                      }
              </ScrollView>

              <Subtitle> Your Heroes</Subtitle> 

          </Titlebar>
        </ScrollView>
      </Container>
    );
  }
}

const Subtitle = styled.Text
`
font-size: 20px;
color: ${colours.blue};
font-weight: 500;
margin-top: 10px;
margin-left: 25px;
text-transform: uppercase;
`;


const Container = styled.View
`
flex: 1;
background-color: ${colours.background};
`;

const Titlebar = styled.View
`
width: 100%;
margin-top: 50px;
padding-left: 80px;
`;

const Avatar = styled.Image
`
width: 44px;
height: 44px;
background: black;
border-radius: 22px;
margin-left: 20px;
position: absolute;
top: 0;
left: 0;
`

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
