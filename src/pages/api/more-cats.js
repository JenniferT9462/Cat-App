const API_NINJAS_KEY = process.env.API_NINJAS_KEY;


async function fetchMultiCats(catName) {
    const url = `https://cats-cats-cats-demo.deno.dev/cats/${catName}?multi_cat=true`
    const result = await fetch(url, {
        headers: { 'X-Api-Key': API_NINJAS_KEY }
    });
    const data = await result.json();
    return data;
}

export default async function handler(req, res) {
    // const { catName } = req.query;
    // console.log(catName);
    const multiCats = await fetchMultiCats("co");
    const responseData = multiCats.map((cat) => ({
        name: cat.name,
        origin: cat.origin,
        min_life: cat.min_life_expectancy,
        max_life: cat.max_life_expectancy,
        length: cat.length,
        min_weight: cat.min_weight,
        max_weight: cat.max_weight,
        image: cat.image_link,
    }));
    res.status(200).json(responseData);
   
}