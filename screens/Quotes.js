import React from 'react';

import styled from 'styled-components';

// Native components
import { ScrollView } from 'react-native';

// Components
import BigButton from "../components/BigButton"
import Quote from "../components/Quote";

import NavigationBar from "../components/NavigationBar.js"

import { RootView } from "../styles/Styles.js"

export default class Quotes extends React.Component {
  _isMounted = false

  constructor(props) {
    super(props)

    this.state = {
      quotes: null
    }

    this.componentMounted();
  }

  componentMounted()
  {
    this._isMounted = true

    this.FetchQuotes();
}

  FetchQuotes()
  {
    fetch('https://cpd-nixon.herokuapp.com/get/', { method: "GET" })
    .then(response => response.json())
    .then(json => {
      if (this._isMounted)
      {
        this.setState({quotes: json})
      }
    })
    .catch((error) => {
      console.log('network error: ' + error);
      alert(error);
    })
  }

  render() {
     return (
       <RootView>
          <ScrollView vertical={true}>
            { this.renderQuotes() }
          </ScrollView>

          <ColumnRow>
            <BigButton text="Create a Quote!" width="150px" background="#FF9900" onPress={() => this.props.navigation.push("SubmitQuoteScreen")}/>
            <BigButton text="Refresh Quotes" width="150px" background="#FF9900" onPress={() => this.OnQuoteRefresh()}/>
          </ColumnRow>

          <NavigationBar nav={this.props.navigation}/>

       </RootView>
     )
   }

   OnQuoteRefresh()
   {
     this.FetchQuotes();
   }

   renderQuotes()
   {
     var temp = []

     if (this.state.quotes === null)
     {
       return;
     }

     Object.values(this.state.quotes).forEach((quote, i) => {
       if (i % 2 == 0)
       {
         temp.push(<Quote key={i + quote.Text} text={quote.Text} background="#66CCFF"/>)
       }
       else
       {
         temp.push(<Quote key={i + quote.Text} text={quote.Text} background="#0099CC"/>)
       }
     })

     return temp
   }
 }

 const ColumnRow = styled.View
 `
 flexDirection: row;
 `
