import React from 'react';
import { Image,Platform,ScrollView,StyleSheet,Text,TouchableOpacity,View, Button} from 'react-native';
import { WebBrowser } from 'expo';
import * as firebase from 'firebase';

import {TestComponent} from './../components/AppComponents';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  onSignoutPress = () => {
    firebase.auth().signOut();
  }

  render() {
    return (
      <View style = {{paddingTop:20}}>
       <Button title="Signout" onPress={this.onSignoutPress} color="#fff" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
