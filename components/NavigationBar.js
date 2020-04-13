import React from 'react';

import styled from 'styled-components';

import { NavigationView } from "../styles/Styles.js"

import NavButton from "../components/NavButton";

const NavigationBar = props => (
  <NavigationView>
  <NavButton text="Diary" onPress={() => props.nav.navigate("Diary")}/>
  <NavButton text="Quotes" onPress={() => props.nav.push("Quotes")}/>
  <NavButton text="Stats" onPress={() => props.nav.push("Stats")}/>
  </NavigationView>
);

export default NavigationBar;
