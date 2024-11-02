async function getPokemon() {
    const url = "https://pokeapi.co/api/v2/pokemon/luxio";
    const result = await fetch(url);
    const data = await result.json();
    return data;
}

export default async function handler(req, res) {
    const pokemon = await getPokemon();
    console.log(pokemon);
    res.status(200).json({
        pokemonName: pokemon.name,
        pokemonCry: pokemon.cries.latest,
        pokemonImgSrc: pokemon.sprites.front_default,
        firstAbility: pokemon.abilities[0].ability.name
    })
}