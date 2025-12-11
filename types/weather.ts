export interface WeatherData {
    weather: WeatherCondition[];
    main: {
        temp: number;
        feels_like: number;
        pressure: number;
        humidity: number;
    };
    visibility: number;
    wind: {
        speed: number;
    };
    name: string;
}

export interface WeatherCondition {
    description: string;
}
