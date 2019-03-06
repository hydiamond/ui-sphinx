import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CategoryListItem from './src/components/CategoryListItem';
import ExampleModal from './src/components/ModalExample';
import NewListItem from './src/components/NewListItem';
export default class App1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container0}>
          <Text>This is Slider !!</Text>
        </View>
        <View style={styles.container1}>
          
      </View>
      </View>
      
    )
  };
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    flex:1,
    alignItems:'stretch'
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