import React from 'react';

import styled from 'styled-components';

import { ColumnFlex, ColumnRow } from "../styles/Styles.js"

const Rating = props => (
  <ButtonContainer onPress={props.onPress} background={props.background}>
    <ButtonText>{props.text}</ButtonText>
  </ButtonContainer>
);

export default class RatingOption extends React.Component
{
  constructor(props)
  {
    super(props);

     this.ref = React.createRef()

    this.state = {
      rating: null
    }
  }

  render()
  {
    return (
      <ColumnRow>
      { this.RenderOptions() }
      </ColumnRow>
    )
  }

  RenderOptions()
  {
    var buttons = [];

    buttons.push(<Rating key={0} text="1" onPress={() => this.OnPress(0)}/>);
    buttons.push(<Rating key={1} text="2" onPress={() => this.OnPress(1)}/>);
    buttons.push(<Rating key={2} text="3" onPress={() => this.OnPress(2)}/>);
    buttons.push(<Rating key={3} text="4" onPress={() => this.OnPress(3)}/>);
    buttons.push(<Rating key={4} text="5" onPress={() => this.OnPress(4)}/>);

    if (this.state.rating !== null)
    {
      buttons[this.state.rating] = <Rating
                                    key={this.state.rating}
                                    text={this.state.rating + 1}
                                    background="#0099CC"
                                    onPress={() => this.OnPress(this.state.rating)}/>;
    }


    return buttons;
  }

  GetRating()
  {
    return this.state.rating;
  }

  OnPress = (key) =>
  {
    this.setState((state) => { return {rating: key}; });
  }
};


const ButtonContainer = styled.TouchableOpacity
`
width: 50px;
height: 35px;
justify-content: center;
background: ${props => props.background ? props.background : "#66CCFF"}
`

const ButtonText = styled.Text
`
font-size: 16px;
text-align: center;
padding: 16px;
font-weight: bold;
`