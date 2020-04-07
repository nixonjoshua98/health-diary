import React from 'react';

import { AsyncStorage, StyleSheet, ScrollView, View }  from "react-native"

import styled from 'styled-components';

import Constants from "../common/constants.js"

import { VictoryBar, VictoryChart, VictoryTheme, VictoryLabel, VictoryAxis } from "victory-native";

import Quote from "../components/Quote";
import NavigationBar from "../components/NavigationBar.js"

import { RootView } from "../styles/Styles.js"

export default class Stats extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      entries: []
    };
  }

  UNSAFE_componentWillMount()
  {
    this.LoadEntries();
  }

  render() {
     return (
       <View>
        <StatsView>
          <ScrollView vertical={true}>
              {this.RenderRatingGraph()}
              {this.RenderRatingGraph()}
              {this.RenderRatingGraph()}
              {this.RenderRatingGraph()}
              {this.RenderRatingGraph()}
              {this.RenderRatingGraph()}
            </ScrollView>
       </StatsView>

       <NavigationBar nav={this.props.navigation}/>
       </View>
     )
   }

   async LoadEntries()
   {
     var entries = await AsyncStorage.getItem(Constants.DiaryKey);

     entries = JSON.parse(entries);

     this.setState( {entries: entries || [] } );
   }

   RenderRatingGraph()
   {
     var data = [
       { Rating: 1, Freq: 0 },
       { Rating: 2, Freq: 0 },
       { Rating: 3, Freq: 0 },
       { Rating: 4, Freq: 0 },
       { Rating: 5, Freq: 0 }
     ];

     for (var i = 0; i < this.state.entries.length; i++) {
       let e = this.state.entries[i];

       data[e.Rating].Freq += 1;
     }

     return (
          <VictoryChart width={400} height={200} theme={VictoryTheme.material}>
              <VictoryAxis dependantAxis label="Rating" tickFormat={x => '\n \n' + x}/>

              <VictoryBar style={{ data: { fill: "#FF9900" }}} data={data} x="Rating" y="Freq"/>

              <VictoryLabel text="Diary Rating Frequency" x={50} y={30}/>
          </VictoryChart>
     )
   }
 }

const StatsView = styled.View
`
height: 91%;
align-items: center;
marginBottom: 75px;
`;
