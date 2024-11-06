const API_NINJAS_KEY = process.env.API_NINJAS_KEY;

async function fetchNinjasCats(searchCat) {
    const url = `https://api.api-ninjas.com/v1/cats?name=${searchCat}`;
    const result = await fetch(url, {
        headers: { 'X-Api-Key': API_NINJAS_KEY }
    });
    const data = await result.json();
    return data;
}


export default async function handler(req, res) {
    const searchQuery = req.query;
    console.log(searchQuery);
    try {
        const cat = await fetchNinjasCats(searchQuery);
        console.log(cat);

        const responseData = {};
        if (cat.length > 0) {
            responseData.name = cat[0].name;
            responseData.origin = cat[0].origin;
            responseData.length = cat[0].length;
            responseData.image = cat[0].image_link;
    } else {
        responseData.error = "No Cats Found!";
    }
     // Handle the request and send a response
     res.status(200).json(responseData);
    
    } catch (error) {
        res.status(500).json({error: "Not cats!"});
        console.error("Error fetching data.", error)
    }
   
}