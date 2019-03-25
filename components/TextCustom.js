import React , {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

const SIZE_DEFAULT = 14;
const COLOR_DEFAULT = '#e5e5e5';

class TextCustom extends Component {
    render() {
      const {
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        height,
        size,
        color,
        align,
        title,
        thin,
        bold,
        light,
        underline,
        subtitle,
        caption,
        style,
        ...props
      } = this.props;

      const textStyle = [
          styles.text,
          h1 && styles.h1,
          h2 && styles.h2,
          h3 && styles.h3,
          h4 && styles.h4,
          h5 && styles.h5,
          h6 && styles.h6,
          title,
          subtitle,
          caption,
          height && {lineHeight:height},
          size  && {fontSize:size},
          align && {textAlign:align},
          color && {color:color},
          thin  && {fontWeight: 100},
          bold  && {fontWeight:'bold'},
          light && {fontWeight: 400},
          underline && {textDecorationLine:'underline'},
          style,
      ]

      return (
        <Text style={textStyle} {...props}>{props.children}</Text>
      )
    };
}

const styles = StyleSheet.create({
    text : {
        fontSize:SIZE_DEFAULT,
        color:COLOR_DEFAULT
    },
    h1 : {
      fontSize : SIZE_DEFAULT * 6,
    },
    h2 : {
      fontSize : SIZE_DEFAULT * 4,
    },
    h3 : {
      fontSize : SIZE_DEFAULT * 3,
    },
    h3 : {
      fontSize : SIZE_DEFAULT * 2.5,
    },
    h5 : {
      fontSize : SIZE_DEFAULT * 1.75,
    },
    h6 : {
      fontSize : SIZE_DEFAULT * 1.25,
    },
    title:{
      fontSize : SIZE_DEFAULT * 1.15,
    }
});


export default TextCustom;