import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PizzaTranslator } from './pizzatranslator.component' // <PizzaTranslator></PizzaTranslator>
import { Blink } from './blink.component'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Blink text="HI"></Blink>
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
