import React from 'react';
import {View} from 'react-native';


class Block extends React.Component {
    render() {
      return (
        <View>
            {this.props.children}
        </View>
      )
    };
}

export default Block;