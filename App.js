/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component {
  state = {
    planet: '',
    dados: {
      name: '',
      gravity: '',
      terrain: '',
      residents: 0,
      ibge: '',
    },
  };
  componentDidMount() {
    fetch('https://swapi.dev/api/planets/1')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          dados: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text>{this.state.dados.name}</Text>
        </TouchableOpacity>

        <Text>Planeta: {this.state.dados.name}</Text>
        <Text>Terreno: {this.state.dados.terrain}</Text>
        <Text>Gravidade: {this.state.dados.gravity}</Text>
        <Text>Diametro: {this.state.dados.diameter}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    paddingVertical: 200,
  },
  containers: {
    flex: 1,
    marginHorizontal: 20,
    paddingVertical: 200,
  },
  button: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});
