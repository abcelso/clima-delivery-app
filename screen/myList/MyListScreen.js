import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Se debería obtener de la base de datos
const CITIES = [
  {
    id: "1",
    title: "Buenos Aires",
    latitude: -37.97,
    longitude: -58.37,
  },
  {
    id: "2",
    title: "La Rioja",
    latitude: -29.41,
    longitude: -66.85,
  },
  {
    id: "3",
    title: "Mendoza",
    latitude: -32.88,
    longitude: -68.83,
  },
  {
    id: "4",
    title: "Córdoba",
    latitude: -31.41,
    longitude: -64.18,
  },
];

const CityItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.cityItem}>{item.title}</Text>
  </TouchableOpacity>
);


const MyListScreen = () => {

  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    const backgroundColor = '#5a78f2';
    const color = 'white';

    return (
      <CityItem
        item={item}
        onPress={() => {
          navigation.navigate('CityScreen', {
            city: item.title,
            latitude: item.latitude,
            longitude: item.longitude,
          });
        }}
        backgroundColor='#5a78f2'
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi lista de ciudades</Text>
      <FlatList
        data={CITIES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MyListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#7AD',
  },
  cityItem: {
    fontSize: 20,
    color: '#fff',
    padding: 10,
    borderBottomColor: '#DDE',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    borderBottomColor: '#DDE',
    borderBottomWidth: 2,
  }
});
