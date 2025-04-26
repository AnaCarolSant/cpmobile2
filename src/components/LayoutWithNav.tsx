import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Nav from './Nav';

type Props = {
  children: React.ReactNode;
};

const LayoutWithNav: React.FC<Props> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>{children}</View>
      <Nav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingBottom: 60,
  },
});

export default LayoutWithNav;
