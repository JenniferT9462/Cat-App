const API_NINJAS_KEY = process.env.API_NINJAS_KEY;

async function fetchNinjasCats(searchCat) {
    const url = `https://api.api-ninjas.com/v1/cats?name=${searchCat}`;
    const result = await fetch(url, {
        headers: { 'X-Api-Key': API_NINJAS_KEY }
    });
    const data = await result.json();
    return data;
}

// pages/api/cats.js
export default async function handler(req, res) {
    const query = req.query;
    console.log(query);
    const cats = await fetchNinjasCats("co");
    console.log(cats);

    const responseData = {};
    if (cats.length > 0) {
        responseData.name = cats[0].name;
        responseData.origin = cats[0].origin;
        responseData.length = cats[0].length;
        responseData.img = cats[0].image_link;
    } else {
        responseData.error = "No Cats Found!";
    }
    // Handle the request and send a response
    res.status(200).json(responseData);
}