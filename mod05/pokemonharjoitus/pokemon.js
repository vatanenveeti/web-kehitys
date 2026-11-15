async function fetchData(osoite) {
    try {
        const response = await fetch(osoite)
        if (response.ok) {
            const response_data = await response.json()
            return response_data
        } else {
            throw new Error("HTTP-virhe! Tilakoodi: " + response.status);
        }
    } catch (error) {
        console.log('Virhe datan haussa: ${error}')
    }
}


async function handle_pokemon_click(event, osoite){
    let pokemonData = await fetchData(osoite)
    let pokemonDiv = event.target.parentElement;
    for (let type of pokemonData.types) {
        let typetext = document.createElement("p")
        typetext.textContent = type.type.name
        pokemonDiv.appendChild(typetext)
    }
}


async function createPokemonView() {
    let lupaus = await fetchData("https://pokeapi.co/api/v2/pokemon")
    const pokemonDiv = document.querySelector("#poke-content");
    for (let pokemon of lupaus.results) {
        let pokemonDetailDiv = document.createElement("div");
        let pokemonText = document.createElement("p");
        pokemonText.textContent = pokemon.name;

        pokemonText.addEventListener("click", (event) => handle_pokemon_click(event, pokemon.url))

        pokemonDetailDiv.appendChild(pokemonText)
        pokemonDiv.appendChild(pokemonDetailDiv);
    }
}



createPokemonView()