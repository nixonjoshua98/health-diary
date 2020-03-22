import React from 'react';

// Native components
import { ScrollView } from 'react-native';

// Components
import BigButton from "../components/BigButton"
import Quote from "../components/Quote";

import NavigationBar from "../components/NavigationBar.js"

import { RootView } from "../styles/Styles.js"

const StaticQuotes = [
  { Text: "Quote 0" },
  { Text: "012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890" },
  { Text: "Quote 2" },
  { Text: "Quote 0" },
  { Text: "Quote 1" },
  { Text: "Quote 2" },
  { Text: "Quote 0" },
  { Text: "Quote 1" },
  { Text: "reallllllllllllllllllllllllllllllllllllllly llllllllllllllllllllllllllooooooooooooooooonnnnnnnnnnnnnnnnngggggggggggggggggg quote sssssssssuuuuuuuuuuuuper long" },
  { Text: "Quote 0" },
  { Text: "Quote 1" },
  { Text: "Quote 2" },
  { Text: "Quote 0" },
  { Text: "Quote 1" },
  { Text: "reallllllllllllllllllllllllllllllllllllllly llllllllllllllllllllllllllooooooooooooooooonnnnnnnnnnnnnnnnngggggggggggggggggg quote sssssssssuuuuuuuuuuuuper long" },
  { Text: "Quote 0" },
  { Text: "Quote 1" },
  { Text: "Quote 2" },
  { Text: "Quote 0" },
  { Text: "Quote 1" },
  { Text: "Quote 2" },
  { Text: "Quote 0" },
  { Text: "Quote 1" },
  { Text: "Quote 2" },
  { Text: "Quote 0" },
  { Text: "Quote 1" },
  { Text: "Quote 2" },
];

export default class Quotes extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
     return (
       <RootView>
          <ScrollView vertical={true}>
            { this.renderQuotes() }
          </ScrollView>

          <BigButton text="Create a Quote!" background="#FF9900" onPress={() => this.props.navigation.push("SubmitQuoteScreen")}/>

          <NavigationBar nav={this.props.navigation}/>

       </RootView>
     )
   }

   renderQuotes()
   {
     var temp = []

     StaticQuotes.forEach((quote, i) => {
       if (i % 2 == 0)
       {
         temp.push(<Quote key={i + quote.Text} text={quote.Text} background="#66CCFF"/>)
       }
       else
       {
         temp.push(<Quote key={i + quote.Text} text={quote.Text} background="#0099CC"/>)
       }
     }
   )

     return temp
   }
 }
