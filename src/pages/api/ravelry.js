const username = process.env.RAVELRY_USERNAME;
const password = process.env.RAVELRY_PASSWORD;

const headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa(username + ':' + password));

async function fetchFromRavelry(queryPattern) {
    const url = `https://api.ravelry.com/patterns/search.json?query=${queryPattern}+free`;
    const response = await fetch(url, {
        method: 'GET',
        headers: headers
    });
    const data = await response.json();
    console.log(data);
    return data;
}

export default async function handler(req, res) {
    const query = req.query;
    console.log(query);
    const patterns = await fetchFromRavelry("Halloween Hats");
    console.log(patterns);

    res.status(200).json(patterns)
}