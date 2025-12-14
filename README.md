# Weather App

A simple React Native weather application built with Expo that displays current weather information based on your location.

This repository contains a solution for a weekly assignment 7 in the course "Web- and Hybrid Technologies in Mobile Programming" at Oulu University of Applied Sciences.

## Features

- 📍 Automatic location detection
- 🌡️ Current temperature and weather conditions
- 💨 Wind speed, humidity, pressure, and visibility information
- 🎨 Clean and simple UI

## Tech Stack

- React Native
- Expo
- TypeScript
- OpenWeatherMap API

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)

4. Add your API key to `app.json`:
   ```json
   {
     "expo": {
       "extra": {
         "WEATHER_API_KEY": "your_api_key_here"
       }
     }
   }
   ```

## Running the App

```bash
npm start
```

Then scan the QR code with Expo Go app (Android) or Camera app (iOS).

## Permissions

The app requires location permission to fetch weather data for your current location.

## Project Structure

```
├── hooks/
│   ├── useFetch.ts      # Generic fetch hook
│   └── useWeather.ts    # Weather & location hook
├── components/
│   └── Header.tsx       # Header component
├── types/
│   └── weather.ts       # TypeScript types
└── App.tsx              # Main app component
```
