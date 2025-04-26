import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LayoutWithNav from '../components/LayoutWithNav';
import * as Animatable from 'react-native-animatable';

export default function PerfilScreen() {


  return (
    <LayoutWithNav>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://img.freepik.com/vetores-premium/avatar-icon002_750950-52.jpg?w=826' }}
          style={styles.profileImage}
        />
        <Text style={styles.username}>Maria Clara Reis</Text>
      </View>
      <View style={styles.container}>
        <Animatable.Text
          animation="fadeInUp"
          style={styles.text}
        >
          Bem-vindo ao seu perfil!
        </Animatable.Text>
      </View>
    </LayoutWithNav>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 15,
    margin: 8,
    backgroundColor: '#1d081d',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  username: {
    fontSize: 18,
    marginLeft: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
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