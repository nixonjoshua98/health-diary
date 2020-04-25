import React from 'react';

import styled from 'styled-components';

import { NavigationView } from "../styles/Styles.js"

import NavButton from "../components/NavButton";

const NavigationBar = props => (
  <NavigationView>
      <NavButton text="Diary" iconName="book" onPress={() => props.nav.navigate("Diary")}/>
      <NavButton text="Quotes" iconName="bubble-chart" onPress={() => props.nav.push("Quotes")}/>
      <NavButton text="Stats" iconName="pie-chart" onPress={() => props.nav.push("Stats")}/>
  </NavigationView>
);

export default NavigationBar;
