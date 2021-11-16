import { arrowFunctionExpression } from '@babel/types';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const API_KEY = 'bd48cd68a8e7447d84bce5bfb6e170ba';

const CityScreen = ({ route }) => {

  const { city, latitude, longitude } = route.params;

  const [weather, setWeather] = useState({
    temp: '',
    feelsLike: '',
    description: 'No disponible',
    min: '',
    max: '',
    description: '',
    iconUrl: '',
    loaded: false,
  });

  useEffect(() => {
    getWeather(latitude, longitude);
  }, []);

  const getWeather = (lat, lon) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=ES&units=metric`)
      .then(response => response.json())
      .then(data => {
        setWeather({
          temp: data.main.temp,
          feelsLike: data.main.feels_like,
          min: data.main.temp_min,
          max: data.main.temp_max,
          description: data.weather[0].description,
          iconUrl: { uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png` },
          loaded: true,
        });
      })
      .catch(error => {
        // TODO Verificar errores si falla / No hay red
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      {weather.loaded ? <Image source={weather.iconUrl} style={{ width: 200, height: 200 }} /> : <Text></Text>}
      <Text style={styles.cityTitle}>{city}</Text>
      <Text>Temperatura: {weather.temp} °C</Text>
      <Text>Sensación Térmica: {weather.feelsLike} °C</Text>
      <Text>Estado Actual: {weather.description}</Text>
      <Text>Mínima: {weather.min} °C - Máxima: {weather.max} °C</Text>
    </View>
  );
};

export default CityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7AD',
  },
  cityTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF',
  }
});
