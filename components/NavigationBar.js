import React from 'react';

import styled from 'styled-components';

import { NavigationView } from "../styles/Styles.js"

import NavButton from "../components/NavButton";

const NavigationBar = props => (
  <NavigationView>
  <NavButton text="Diary" onPress={() => props.nav.navigate("Diary")}/>
  <NavButton text="Quotes" onPress={() => props.nav.navigate("Quotes")}/>
  <NavButton text="Stats" onPress={() => props.nav.navigate("Stats")}/>
  </NavigationView>
);

export default NavigationBar;
