/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useEffect, useState} from 'react';
import api from './services/api';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    api.get('/').then((response) => {
      console.log(response.data);
      setPlanets(response.data.results);
    });
  });

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {planets.map((planet) => (
            <TouchableOpacity style={styles.button}>
              <Text key={planet.name}> NOME : {planet.name}</Text>
              <Text> DIAMETRO : {planet.diameter}</Text>
              <Text> CLIMA : {planet.climate}</Text>
              <Text> Gravidade : {planet.gravity}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    paddingVertical: 200,
  },
  button: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D0D0D0',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});
