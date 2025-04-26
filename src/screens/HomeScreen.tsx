import React from 'react';
import { View, StyleSheet } from 'react-native';
import LayoutWithNav from '../components/LayoutWithNav';
import * as Animatable from 'react-native-animatable';

export default function HomeScreen() {
  return (
    <LayoutWithNav>
      <View style={styles.container}>
        <Animatable.Text
          animation="fadeInUp" 
          style={styles.text}
        >
          Bem-vindo à Home!
        </Animatable.Text>
      </View>
    </LayoutWithNav>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});