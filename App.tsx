import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Platform } from 'react-native';
import Header from './components/Header';
import { useWeather } from './hooks/useWeather';

export default function App() {
  const { weatherData, loading, error } = useWeather();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Ladataan...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (!weatherData) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No weather data available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.locationInfo}>
          <Text style={styles.locationName}>{weatherData.name}</Text>
        </View>

        <View style={styles.currentWeather}>
          <Text style={styles.temperature}>{Math.round(weatherData.main.temp)}°C</Text>
          <Text style={styles.description}>{weatherData.weather[0]?.description}</Text>
          <Text style={styles.feelsLike}>Feels like {Math.round(weatherData.main.feels_like)}°C</Text>
        </View>

        <View style={styles.details}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Humidity</Text>
            <Text style={styles.detailValue}>{weatherData.main.humidity}%</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Wind</Text>
            <Text style={styles.detailValue}>{weatherData.wind.speed} m/s</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Pressure</Text>
            <Text style={styles.detailValue}>{weatherData.main.pressure} hPa</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Visibility</Text>
            <Text style={styles.detailValue}>{(weatherData.visibility / 1000).toFixed(1)} km</Text>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'ios' ? 50 : 0,
  },
  content: {
    padding: 20,
  },
  locationInfo: {
    alignItems: 'center',
    marginBottom: 12,
  },
  locationName: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#333',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    padding: 20,
  },
  currentWeather: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    marginBottom: 16,
  },
  temperature: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 20,
    color: '#666',
    textTransform: 'capitalize',
    marginTop: 8,
  },
  feelsLike: {
    fontSize: 14,
    color: '#999',
    marginTop: 4,
  },
  details: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  detailLabel: {
    fontSize: 16,
    color: '#666',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});
