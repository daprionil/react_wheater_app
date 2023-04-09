export const KEY_WEATHER_API = 'f64bf468a7ad1a6ec566d5d8ca7ec921';
export const keyApi = `https://api.openweathermap.org/data/2.5/weather?q=[city],[country]&appid=[api_key]`;

export const getUrlApi = (city) => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY_WEATHER_API}`;
}
