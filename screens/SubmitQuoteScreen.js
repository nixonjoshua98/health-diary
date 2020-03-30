import React from 'react';

import { TextInput, StyleSheet }  from "react-native"

import BigButton from "../components/BigButton"

import styled from 'styled-components';

import NavigationBar from "../components/NavigationBar.js"

import { RootView } from "../styles/Styles.js"

export default class SubmitQuoteScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      quote: ""
    }
  }

  render() {
     return (
       <RootView>

          <StyledView>
              <TextInput style={MyStyleSheet.TextInput} onChange={e => this.OnQuoteTextUpdate(e)}/>
              <BigButton text="Submit" background="#FF9900" onPress={() => this.OnQuoteSubmit()}/>
          </StyledView>

          <NavigationBar nav={this.props.navigation}/>

       </RootView>
     )
   }

   OnQuoteTextUpdate = (e) =>
   {
     var quote = e.nativeEvent.text

     this.setState((state) => { return {quote: quote}; });
   }

   OnQuoteSubmit()
   {
     fetch('https://cpd-nixon.herokuapp.com/set/', {
       method: "POST",
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify({"Text": this.state.quote})
     })
     .then(response => { if (response.status == 200) { this.props.navigation.navigate("Quotes"); } })

     .catch((error) => {
       console.log('network error: ' + error);
       alert(error);
     })
   }
 }

const StyledView = styled.View
`
flex: 1;
margin-top: 25px;
align-items: center;
`;


const MyStyleSheet = StyleSheet.create({
  TextInput: {
    display: "flex",
    backgroundColor: "#0099CC",
    justifyContent: "center",
    marginTop: 100,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 250,
    borderRadius: 25,
    width: "90%",
    height: 50
  }
})
