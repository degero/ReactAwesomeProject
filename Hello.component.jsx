import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Hello extends React.Component {
  render() {
    return (
        <Text>Hello {this.props.name}</Text>
    );
  }
}
