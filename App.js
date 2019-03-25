import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './components/Button';
export default class App1 extends React.Component {
  render() {
    return (
      <View>
        <Button>Click me</Button>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    flex:1,
    alignItems:'stretch',
    position: 'absolute',
  },
  container0:{
    height:155,
    backgroundColor: 'green',
    paddingLeft:8,
    paddingRight:8,
  },
  container1: {
    flex:1,
    paddingLeft: 8,
    paddingRight: 8,
    alignItems: 'stretch',
  }
})