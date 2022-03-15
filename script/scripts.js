
const fetchPokemon = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/ditto";
    fetch(url).then((res) => {
        console.info(res)
        return res.json;
    }).then((data) => {
        console.info(data.sprites);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
    });
}

fetchPokemon();

const pokeImg = (url) => {
    const poke = document.getElementById("pokeImg");
    pokeImg.src = url
}

const imprimir = () => {
    const pokename = document.getElementById("pokename");
    let pokeimput = pokename.value;
    console.log("Hola " + pokeimput);
}