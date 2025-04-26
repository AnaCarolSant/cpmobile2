import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LayoutWithNav from '../components/LayoutWithNav';

export default function HomeScreen() {
  return (
    <LayoutWithNav>
      <View style={styles.container}>
        <Text style={styles.text}>Bem-vindo à Home!</Text>
      </View>
    </LayoutWithNav>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
