import React from 'react';
import { View, Text } from 'react-native';

class Children extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            number : 5
        }
    }
    render(){
        return(
            <View>
                <Text>Value: {this.state.number}</Text>
            </View>
        )
    }
}

export default componentName;
