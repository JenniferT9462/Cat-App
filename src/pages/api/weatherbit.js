const WEATHERBIT_API_KEY = process.env.WEATHERBIT_API_KEY;
console.log(WEATHERBIT_API_KEY);
async function getWeather(city) {
    const url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${WEATHERBIT_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export default async function handler(req, res) {
    const weather = await getWeather("baton rouge");
    res.status(200).json(weather);
}