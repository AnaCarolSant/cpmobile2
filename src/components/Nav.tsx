import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Nav: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.navContainer}>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
        <MaterialIcons name="home" size={28} color="#FFFFFF" />
        <Text style={styles.navText}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Perfil')}>
        <MaterialIcons name="person" size={28} color="#FFFFFF" />
        <Text style={styles.navText}>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Detalhes')}>
        <MaterialIcons name="info" size={28} color="#FFFFFF" />
        <Text style={styles.navText}>Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1d081d',
    paddingVertical: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
  },
  navText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 4,
  },
});

export default Nav;
