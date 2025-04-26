import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LayoutWithNav from '../components/LayoutWithNav';

export default function DetalhesScreen() {
  return (
    <LayoutWithNav>
      <View style={styles.container}>
        <Text style={styles.text}>Esta é a tela de detalhes.</Text>
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
