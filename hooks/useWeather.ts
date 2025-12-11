import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import Constants from 'expo-constants';
import { WeatherData } from '../types/weather';
import { useFetch } from './useFetch';

export function useWeather() {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [locationLoading, setLocationLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setLocationError('Location permission is denied');
          setLocationLoading(false);
          return;
        }

        const position = await Location.getCurrentPositionAsync({});
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLocationLoading(false);
      } catch (err) {
        setLocationError(err instanceof Error ? err.message : 'Error getting your location');
        setLocationLoading(false);
      }
    })();
  }, []);

  const API_KEY = Constants.expoConfig?.extra?.WEATHER_API_KEY || '';
  const API_BASE_URL = Constants.expoConfig?.extra?.API_BASE_URL || '';

  const apiUrl = location && API_KEY ? `${API_BASE_URL}?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${API_KEY}` : null;

  const { data: weatherData, loading: weatherLoading, error: weatherError } = useFetch<WeatherData>(apiUrl);

  const loading = locationLoading || weatherLoading;
  const error = locationError || 
    (weatherError ? (weatherError instanceof Error ? weatherError.message : String(weatherError)) : null);

  return { weatherData, loading, error };
}
