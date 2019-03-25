import React, { Component } from 'react'
import { ActivityIndicator, Dimensions, Text, StyleSheet, TouchableOpacity ,Icon } from 'react-native';
const { width, height } = Dimensions.get('window');


const BASE_SIZE = 14;
const COLOR_TEXT = `#FFFFFF`;
const COLOR_DEFAULT = `#45547e`;
const COLOR_PRIMARY = `#7CB527`;
const COLOR_SECONDARY = `#FF3D57`;
const COLOR_TERTIARY = `#7857A9`;

export default class Button extends Component {



  static defaultProps = {
    opacity: 0.8,
    color: COLOR_TEXT,
    primary: false,
    secondary: false,
    tertiary: false,
    full: false,
    rounded: false,
    basic: false,
    loading: false,
    size: BASE_SIZE,
  }

  render() {
    const {
      label,
      opacity,
      color,
      primary,
      secondary,
      tertiary,
      full,
      rounded,
      basic,
      size,
      loading,
      icon,
      family,
      style,
      ...props
    } = this.props;

    const buttonStyles = [
      styles.button,
      primary && styles.primary,
      secondary && styles.secondary,
      tertiary && styles.tertiary,
      full && styles.full,
      rounded && styles.rounded,
      basic && styles.basic,
      style,
    ]

    const textStyles = [
      {color: color},
      size && {fontSize: size},
      basic && { color: COLOR_DEFAULT }
    ]

    // const { [family]: IconFamily } = Icon;
    // const iconContent = icon && IconFamily ?
    //   <Icon name={icon} size={size} color={basic ? COLOR_DEFAULT : color}>
    //     {label && ` ${label}`}
    //   </Icon> : null;
    // const buttonContent = <Text style={textStyles}>{iconContent || label}</Text>;
    const buttonContent = <Text style={textStyles}>{label}</Text>;
    const loadingContent = <ActivityIndicator size="small" color={COLOR_TEXT} />;

    return (
      <TouchableOpacity
        {...props}
        activeOpacity={opacity}
        style={buttonStyles}
        disabled={loading}>
        {loading ? loadingContent : buttonContent }
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: COLOR_DEFAULT,
    paddingHorizontal: BASE_SIZE * 2,
    paddingVertical: BASE_SIZE * 0.8,
    borderRadius: BASE_SIZE * 0.4,
  },
  primary: {
    backgroundColor: COLOR_PRIMARY
  },
  secondary: {
    backgroundColor: COLOR_SECONDARY
  },
  tertiary: {
    backgroundColor: COLOR_TERTIARY
  },
  full: {
    width: width * 0.9,
  },
  rounded: {
    borderRadius: BASE_SIZE * 2,
  },
  basic: {
    backgroundColor: COLOR_TEXT,
    borderColor: COLOR_DEFAULT,
    borderWidth: 0.6,
  }
})






