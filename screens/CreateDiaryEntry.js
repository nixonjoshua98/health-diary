import React from 'react';

import { TextInput, StyleSheet }  from "react-native"

import BigButton from "../components/BigButton"

import styled from 'styled-components';

import NavigationBar from "../components/NavigationBar.js"

import { RootView } from "../styles/Styles.js"

export default class CreateDiaryEntry extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
     return (
       <RootView>
        <RootView/>

         <NavigationBar nav={this.props.navigation}/>

       </RootView>
     )
   }
 }
