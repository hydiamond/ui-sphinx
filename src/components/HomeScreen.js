import React from 'react';
import {StyleSheet,View,Text} from 'react-native';


export default class HomeScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>This is HomeScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'red',
    }
});