import React from 'react';
import { View, Text, Image, StyleSheet ,StatusBar } from 'react-native';
import { Header } from './component/Header';
import { Product } from './component/Product';

export default function App() {
  const products = [
    {
      name: 'Apple Phone',
      color: 'green',
      price: 67000,
      image: require('./assets/2.jpeg'),
    },
    {
      name: 'Nokia Phone',
      color: 'green',
      price: 67000,
      image: require('./assets/2.jpeg'),
    },
    {
      name: 'Vivo Phone',
      color: 'green',
      price: 67000,
      image: require('./assets/2.jpeg'),
    },
    {
      name: 'Samsung Phone',
      color: 'blue',
      price: 55000,
      image: require('./assets/2.jpeg'),
    },
  ];

  return (
    <View>
      <StatusBar backgroundColor={'white'}
       barStyle={'dark-content'}
       hidden={false}
      ></StatusBar>

      <Header />
      <View style={styles.productRow}>
        {products.slice(0, 2).map((item) => (
          <Product item={item} />
        ))}
      </View>
      <View style={styles.productRow}>
        {products.slice(2, 4).map((item) => (
          <Product  item={item} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Space between products
    padding: 10,
  },
});
