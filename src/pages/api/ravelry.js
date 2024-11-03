// import { patchFetch } from "next/dist/server/app-render/entry-base";

const username = process.env.RAVELRY_USERNAME;
const password = process.env.RAVELRY_PASSWORD;

const headers = new Headers();
//Set headers and convert binary string to ASCII w/btoa() function
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
    // const query = req.query;
    // console.log(query);
    const data = await fetchFromRavelry("Halloween Hats");
    console.log(data);
    res.status(200).json({
        name: data.patterns[0].name,
        image: data.patterns[0].first_photo.medium_url,
        designer: data.patterns[0].designer.name
    })
}