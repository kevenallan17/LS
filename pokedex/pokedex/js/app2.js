const pokedex = document.querySelector('section')
const nomepoke = document.querySelector('#filter-name')
let filter_name
let result=''

function pokemonList (a){
  for (pokemon of pokemons){

    if (pokemon.type.length==1){
      pokemon.type[1]=''
    }

    result+= `<div class="pokemon" data-name="${pokemon.name}" data-type="${pokemon.type[0]},${pokemon.type[1]}" tabindex="1">
        <figure class="pokemon-figure">
          <img src="img/${pokemon.name}.png" alt="${pokemon.name}">
        </figure>
        <section class="pokemon-description">
          <span class="pokemon-id">${pokemon.id}</span>
          <h1 class="pokemon-name">${pokemon.name}</h1>
          <div class="pokemon-types">
            <span class="pokemon-type background-${pokemon.type[0]}">${pokemon.type[0]}</span>
            <span class="pokemon-type background-${pokemon.type[1]}">${pokemon.type[1]}</span>
          </div>
        </section>
        <section class="pokemon-stats">
          <div class="stat-row">
            <div>hp</div>
            <div class="stat-bar">
              <div class="stat-bar-bg" style="width: 18%">${pokemon.stats.hp}</div>
            </div>
          </div>
          <div class="stat-row">
            <div>attack</div>
            <div class="stat-bar">
              <div class="stat-bar-bg" style="width: 19.6%">${pokemon.stats.attack}</div>
            </div>
          </div>
          <div class="stat-row">
            <div>defense</div>
            <div class="stat-bar">
              <div class="stat-bar-bg" style="width: 19.6%">${pokemon.stats.defense}</div>
            </div>
          </div>
          <div class="stat-row">
            <div>sp-atk</div>
            <div class="stat-bar">
              <div class="stat-bar-bg" style="width: 26%">${pokemon.stats["sp-atk"]}</div>
            </div>
          </div>
          <div class="stat-row">
            <div>sp-def</div>
            <div class="stat-bar">
              <div class="stat-bar-bg" style="width: 26%">${pokemon.stats["sp-def"]}</div>
            </div>
          </div>
          <div class="stat-row">
            <div>speed</div>
            <div class="stat-bar">
              <div class="stat-bar-bg" style="width: 18%">${pokemon.stats.speed}</div>
            </div>
          </div>
        </section>
      </div>`
  }
  pokedex.innerHTML=result
}

pokemonList(pokemons)


nomepoke.addEventListener('keydown',function(){
    if (nomepoke==''){
      pokemonList(pokemons)
    }
    else{
      array=pokemons.filter(poke=>poke.name.includes(nomepoke.value))
      pokemonList(array)
    }
})

/*
nomepoke.addEventListener('keyup',function(event){
  if (event.key == 'Escape'){
    nomepoke.value=''
    pokemonList()
    pokedex.innerHTML = result
  }
})*/

/*
let result2=''
const filter_tipo = document.querySelector('#filter-type')
const tipos = ['All','bug','dragon','electric','fairy','fighting','fire','flying','ghost','grass','ground','ice','normal','poison','psychic','rock','steel','water']
for (i of tipos){
  result2 += `<option value="${i}">${i}</option>`
}
filter_tipo.innerHTML=result2
*/