import React from 'react';

import { Text } from 'react-native';

class Settings extends React.Component {
  render() {
     const { navigate } = this.props.navigation;

     return (
       <Text>Settings</Text>
     )
   }
 }

export default Settings;
