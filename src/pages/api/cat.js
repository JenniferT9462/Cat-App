const API_NINJAS_KEY = process.env.API_NINJAS_KEY;

async function fetchNinjasCat(catQuery) {
    const url = `https://api.api-ninjas.com/v1/cats?name=${catQuery}`;
    const response = await fetch(url, {
        headers: { 'X-Api-Key': API_NINJAS_KEY }
    });
    if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}



export default async function handler(req, res) {
    const { name } = req.query;

    if(!name) {
        return res.status(400).json({ error: 'Missing "name" query parameter' });
    }
    try {
        const cat = await fetchNinjasCat(name);
        console.log(cat);
        if(!cat || cat.length === 0) {
            return res.status(400).json({ error: 'Cat not found' })
        }

        let catData = 
            {
                name: cat[0].name,
                origin: cat[0].origin,
                image: cat[0].image_link,
                length: cat[0].length
            };
            res.status(200).json(catData);
        } catch (error) {
            console.error('Error fetching car!', error);
            res.status(500).json({ error: 'Internal Server Error' })
        }
    }