import React from 'react';
import { View, Text, Image, StyleSheet,Button } from 'react-native';

export const Product = ({ item }) => {
  return (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.image} />
      <Text>{item.name}</Text>
      <Text>{item.color}</Text>
      <Text>{item.price}</Text>
      <Button title='Add to card'/>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '45%', 
  },
  image: {
    width: '100%',
    height: 100,
    marginBottom: 10,
  },
});
