import React from 'react';

import { AsyncStorage, StyleSheet, ScrollView, View, Text }  from "react-native"
import { Divider } from 'react-native-paper';

import styled from 'styled-components';

import Constants from "../common/constants.js"

import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryLabel,
  VictoryAxis,
  VictoryPie,
  VictoryArea,
  VictoryGroup
} from "victory-native";

import Quote from "../components/Quote";
import NavigationBar from "../components/NavigationBar.js"

import { RootView, ColumnRow } from "../styles/Styles.js"

export default class Stats extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      entries: [],
      RatingFreq: [],
      LocationFreq: []
    };
  }

  UNSAFE_componentWillMount()
  {
    this.GetGraphData();
  }

  render() {
     return (
       <RootView>

            <ScrollView vertical={true}>
                {this.RenderGraphs()}
            </ScrollView>

            <NavigationBar nav={this.props.navigation}/>

       </RootView>
     )
   }

   async GetGraphData()
   {
     var entries = await AsyncStorage.getItem(Constants.DiaryKey);

     this.setState( {entries: JSON.parse(entries) || [] } );

     var ratingFreq = [ { Rating: 1, Freq: 0 }, { Rating: 2, Freq: 0 }, { Rating: 3, Freq: 0 },
                        { Rating: 4, Freq: 0 }, { Rating: 5, Freq: 0 } ];
     var LocationFreqDict = {};

     for (var i = 0; i < this.state.entries.length; i++)
     {
       let e = this.state.entries[i];

       LocationFreqDict[e.Location] = (LocationFreqDict[e.Location] || 0) + 1;
       ratingFreq[e.Rating].Freq += 1;
     }

     var LocationFreq = [];

     for (var key in LocationFreqDict) {
       LocationFreq.push({x: key, y: LocationFreqDict[key]})
     }

     this.setState({RatingFreq: ratingFreq});
     this.setState({LocationFreq: LocationFreq});
   }

   RenderGraphs()
   {
     return (
       <View>
          <VictoryChart height={250} theme={VictoryTheme.material}>
              <VictoryAxis dependantAxis label="Rating" tickFormat={x => '\n \n' + x}/>
              <VictoryBar style={{ data: { fill: "#FF9900" }}} data={this.state.RatingFreq} x="Rating" y="Freq"/>
              <VictoryLabel text="Diary Ratings" x={50} y={30}/>
          </VictoryChart>

          <VictoryGroup theme={VictoryTheme.material}>
              <VictoryPie
                  labelRadius={({ innerRadius }) => innerRadius + 25}
                  innerRadius={50}
                  padding={50}
                  margin={{top: 50}}
                  style={{ labels: { fill: "black", fontSize: 16, fontWeight: "bold" } }}
                  padAngle={({ datum }) => 1}
                  height={250}
                  data={this.state.LocationFreq}
              />
              <VictoryLabel text="Locations" x={50} y={30}/>
          </VictoryGroup>
      </View>
    )
  }
}

const StatsView = styled.View
`
display: flex;
height: 91%;
align-items: center;
backgroundColor: black;
marginBottom: 75px;
`;
