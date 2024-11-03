const HUMOR_API_KEY = process.env.HUMOR_API_KEY;

async function fetchJokeFromHumor() {
    const url = "https://api.humorapi.com/jokes/search?number=3&keywords=horse,man";
    const result = await fetch(url, {
        headers: { 'x-api-key': HUMOR_API_KEY }
    });
    const data = await result.json();
    return data;

}

export default async function handler(req, res) {
    const jokes = await fetchJokeFromHumor();
    console.log(jokes);

    
    res.status(200).json({message: jokes});
}