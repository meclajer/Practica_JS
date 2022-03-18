// Carga inicial
// cards pokemons
const loadDataCards = () => {

    // Consulta API
    // Consultar API
    const url = `https://pokeapi.co/api/v2/pokemon?limit=3&offset=150`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            pokeImage("./assets/loading.gif")
        } else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            // Data result
            console.log(data.results);

            // Load data
            // Nombres
            document.getElementById("cardNombrePokemonUno").innerHTML = (data.results[0].name).toUpperCase();
            document.getElementById("cardNombrePokemonDos").innerHTML = (data.results[1].name).toUpperCase();
            document.getElementById("cardNombrePokemonTres").innerHTML = (data.results[2].name).toUpperCase();

            // Datos Card 1 consuta API
            let pokemon = data.results[0].name;
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((res) => {
                if (res.status != "200") {} else {
                    return res.json();
                }
            }).then((data) => {
                if (data) {
                    // Data result
                    // console.log(data);

                    // Imagen
                    let pokeImg = data.sprites.front_default;
                    (document.getElementById("imgCardUno")).src = pokeImg;
                    // Tipo
                    let tipo = data.types.map((type) => type.type.name).join(', ');
                    document.getElementById("cardUnoTipo").innerHTML = tipo + ".";
                    // Habilidades
                    let abilidades = data.abilities.map((ability) => ability.ability.name).join(', ');
                    document.getElementById("cardUnoHabilidades").innerHTML = abilidades + ".";

                }
            });

            // Datos Card 2 consuta API
            pokemon = data.results[1].name;
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((res) => {
                if (res.status != "200") {} else {
                    return res.json();
                }
            }).then((data) => {
                if (data) {
                    // Data result
                    // console.log(data);

                    // Imagen
                    let pokeImg = data.sprites.front_default;
                    (document.getElementById("imgCardDos")).src = pokeImg;
                    // Tipo
                    let tipo = data.types.map((type) => type.type.name).join(', ');
                    document.getElementById("cardDosTipo").innerHTML = tipo + ".";
                    // Habilidades
                    let abilidades = data.abilities.map((ability) => ability.ability.name).join(', ');
                    document.getElementById("cardDosHabilidades").innerHTML = abilidades + ".";

                }
            });

            // Datos Card 3 consuta API
            pokemon = data.results[2].name;
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((res) => {
                if (res.status != "200") {} else {
                    return res.json();
                }
            }).then((data) => {
                if (data) {
                    // Data result
                    // console.log(data);

                    // Imagen
                    let pokeImg = data.sprites.front_default;
                    (document.getElementById("imgCardTres")).src = pokeImg;
                    // Tipo
                    let tipo = data.types.map((type) => type.type.name).join(', ');
                    document.getElementById("cardTresTipo").innerHTML = tipo + ".";
                    // Habilidades
                    let abilidades = data.abilities.map((ability) => ability.ability.name).join(', ');
                    document.getElementById("cardTresHabilidades").innerHTML = abilidades + ".";

                }
            });

        }
    });

}

// pokemon principal
const loadData = () => {

    // Pokemon aleatorio
    const pokeIndex = parseInt(Math.random() * (888 - 1) + 1);

    // Consultar API
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeIndex}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            pokeImage("./assets/loading.gif")
        } else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            // Data result
            // console.log(data);

            // Load data
            // Imagen
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            // Nombre
            let pokemonName = data.forms[0].name;
            console.log(pokemonName);
            document.getElementById("pokemonNombre").innerHTML = (pokemonName).toUpperCase() + ".";
            // Habilidades
            let abilidades = data.abilities.map((ability) => ability.ability.name).join(', ');
            document.getElementById("abilities").innerHTML = abilidades + ".";
            // Tipo
            let tipo = data.types.map((type) => type.type.name).join(', ');
            document.getElementById("type").innerHTML = tipo + ".";
            // vida
            let vida = data.stats[0].base_stat;
            document.getElementById("hp").innerHTML = vida + ".";
            // ataque
            let ataque = data.stats[1].base_stat;
            document.getElementById("attack").innerHTML = ataque + ".";
            // Defensa
            let defensa = data.stats[2].base_stat;
            document.getElementById("defense").innerHTML = defensa + ".";
            // velocidad
            let velocidad = data.stats[5].base_stat;
            document.getElementById("speed").innerHTML = velocidad + ".";
        }
    });

    loadDataCards();

}

// Ejecutar llamado inicial de datos
loadData();

// consulta de pokemon espesifico
const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        } else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            // Data result
            // console.log(data);

            // Load data
            // actualizar titulo
            document.getElementById("encabezadoh2").innerHTML = "Datos del pokemon:";
            // Imagen
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            // Nombre
            let pokemonName = data.forms[0].name;
            console.log(pokemonName);
            document.getElementById("pokemonNombre").innerHTML = pokemonName + ".";
            // Habilidades
            let abilidades = data.abilities.map((ability) => ability.ability.name).join(', ');
            document.getElementById("abilities").innerHTML = abilidades + ".";
            // Tipo
            let tipo = data.types.map((type) => type.type.name).join(', ');
            document.getElementById("type").innerHTML = tipo + ".";
            // vida
            let vida = data.stats[0].base_stat;
            document.getElementById("hp").innerHTML = vida + ".";
            // ataque
            let ataque = data.stats[1].base_stat;
            document.getElementById("attack").innerHTML = ataque + ".";
            // Defensa
            let defensa = data.stats[2].base_stat;
            document.getElementById("defense").innerHTML = defensa + ".";
            // velocidad
            let velocidad = data.stats[5].base_stat;
            document.getElementById("speed").innerHTML = velocidad + ".";
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}