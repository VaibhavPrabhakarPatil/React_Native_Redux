import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Header Page</Text>
      <Image
        source={require('../assets/shopping _cart.png')} 
        style={styles.cartIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center', 
    padding: 10,
    backgroundColor: '#f8f8f8', 
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cartIcon: {
    width: 24, 
    height: 24, 
  },
});
