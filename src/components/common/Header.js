import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';

const Header = props => {
  return (
    <View style={style.viewStyle}>
      <Text style={style.textStyle}>{props.headerText}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20
  }
});

Header.PropTypes = {
  headerText: PropTypes.string
}

export {Header};
