import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CategoryListItem from './src/components/CategoryListItem';
import ExampleModal from './src/components/ModalExample';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container0}>
          <Text>This is Slider !!</Text>
        </View>
        <View style={styles.container1}>
          <CategoryListItem></CategoryListItem>
          <CategoryListItem></CategoryListItem>
          <CategoryListItem></CategoryListItem>
          <CategoryListItem></CategoryListItem>
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