import React from 'react';
import {StyleSheet,View,Text} from 'react-native';


export default class ChatScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>This is ChatScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'green',
    }
});