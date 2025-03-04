const pokemons = [
    {
      "id": 1,
      "name": "Bulbasaur",
      "type": [
        "grass",
        "poison"
      ],
      "stats": {
        "total": 318,
        "hp": 45,
        "attack": 49,
        "defense": 49,
        "sp-atk": 65,
        "sp-def": 65,
        "speed": 45
      }
    },
    {
      "id": 2,
      "name": "Ivysaur",
      "type": [
        "grass",
        "poison"
      ],
      "stats": {
        "total": 405,
        "hp": 60,
        "attack": 62,
        "defense": 63,
        "sp-atk": 80,
        "sp-def": 80,
        "speed": 60
      }
    },
    {
      "id": 3,
      "name": "Venusaur",
      "type": [
        "grass",
        "poison"
      ],
      "stats": {
        "total": 525,
        "hp": 80,
        "attack": 82,
        "defense": 83,
        "sp-atk": 100,
        "sp-def": 100,
        "speed": 80
      }
    },
    {
      "id": 4,
      "name": "Charmander",
      "type": [
        "fire"
      ],
      "stats": {
        "total": 309,
        "hp": 39,
        "attack": 52,
        "defense": 43,
        "sp-atk": 60,
        "sp-def": 50,
        "speed": 65
      }
    },
    {
      "id": 5,
      "name": "Charmeleon",
      "price": 2.50,
      "type": [
        "fire"
      ],
      "stats": {
        "total": 405,
        "hp": 58,
        "attack": 64,
        "defense": 58,
        "sp-atk": 80,
        "sp-def": 65,
        "speed": 80
      }
    },
    {
      "id": 6,
      "name": "Charizard",
      "price": 3.00,
      "type": [
        "fire",
        "flying"
      ],
      "stats": {
        "total": 534,
        "hp": 78,
        "attack": 84,
        "defense": 78,
        "sp-atk": 109,
        "sp-def": 85,
        "speed": 100
      }
    },
    {
      "id": 7,
      "name": "Squirtle",
      "price": 2.50,
      "type": [
        "water"
      ],
      "stats": {
        "total": 314,
        "hp": 44,
        "attack": 48,
        "defense": 65,
        "sp-atk": 50,
        "sp-def": 64,
        "speed": 43
      }
    },
    {
      "id": 8,
      "name": "Wartortle",
      "price": 1.00,
      "type": [
        "water"
      ],
      "stats": {
        "total": 405,
        "hp": 59,
        "attack": 63,
        "defense": 80,
        "sp-atk": 65,
        "sp-def": 80,
        "speed": 58
      }
    },
    {
      "id": 9,
      "name": "Blastoise",
      "price": 2.50,
      "type": [
        "water"
      ],
      "stats": {
        "total": 530,
        "hp": 79,
        "attack": 83,
        "defense": 100,
        "sp-atk": 85,
        "sp-def": 105,
        "speed": 78
      }
    },
    {
      "id": 10,
      "name": "Caterpie",
      "price": 3.00,
      "type": [
        "bug"
      ],
      "stats": {
        "total": 195,
        "hp": 45,
        "attack": 30,
        "defense": 35,
        "sp-atk": 20,
        "sp-def": 20,
        "speed": 45
      }
    },
    {
      "id": 11,
      "name": "Metapod",
      "price": 3.00,
      "type": [
        "bug"
      ],
      "stats": {
        "total": 205,
        "hp": 50,
        "attack": 20,
        "defense": 55,
        "sp-atk": 25,
        "sp-def": 25,
        "speed": 30
      }
    },
    {
      "id": 12,
      "name": "Butterfree",
      "price": 2.50,
      "type": [
        "bug",
        "flying"
      ],
      "stats": {
        "total": 395,
        "hp": 60,
        "attack": 45,
        "defense": 50,
        "sp-atk": 90,
        "sp-def": 80,
        "speed": 70
      }
    },
    {
      "id": 13,
      "name": "Weedle",
      "price": 1.00,
      "type": [
        "bug",
        "poison"
      ],
      "stats": {
        "total": 195,
        "hp": 40,
        "attack": 35,
        "defense": 30,
        "sp-atk": 20,
        "sp-def": 20,
        "speed": 50
      }
    },
    {
      "id": 14,
      "name": "Kakuna",
      "price": 3.00,
      "type": [
        "bug",
        "poison"
      ],
      "stats": {
        "total": 205,
        "hp": 45,
        "attack": 25,
        "defense": 50,
        "sp-atk": 25,
        "sp-def": 25,
        "speed": 35
      }
    },
    {
      "id": 15,
      "name": "Beedrill",
      "price": 2.50,
      "type": [
        "bug",
        "poison"
      ],
      "stats": {
        "total": 395,
        "hp": 65,
        "attack": 90,
        "defense": 40,
        "sp-atk": 45,
        "sp-def": 80,
        "speed": 75
      }
    },
    {
      "id": 16,
      "name": "Pidgey",
      "price": 1.00,
      "type": [
        "normal",
        "flying"
      ],
      "stats": {
        "total": 251,
        "hp": 40,
        "attack": 45,
        "defense": 40,
        "sp-atk": 35,
        "sp-def": 35,
        "speed": 56
      }
    },
    {
      "id": 17,
      "name": "Pidgeotto",
      "price": 1.00,
      "type": [
        "normal",
        "flying"
      ],
      "stats": {
        "total": 349,
        "hp": 63,
        "attack": 60,
        "defense": 55,
        "sp-atk": 50,
        "sp-def": 50,
        "speed": 71
      }
    },
    {
      "id": 18,
      "name": "Pidgeot",
      "price": 3.00,
      "type": [
        "normal",
        "flying"
      ],
      "stats": {
        "total": 479,
        "hp": 83,
        "attack": 80,
        "defense": 75,
        "sp-atk": 70,
        "sp-def": 70,
        "speed": 101
      }
    },
    {
      "id": 19,
      "name": "Rattata",
      "price": 1.00,
      "type": [
        "normal"
      ],
      "stats": {
        "total": 253,
        "hp": 30,
        "attack": 56,
        "defense": 35,
        "sp-atk": 25,
        "sp-def": 35,
        "speed": 72
      }
    },
    {
      "id": 20,
      "name": "Raticate",
      "price": 2.50,
      "type": [
        "normal"
      ],
      "stats": {
        "total": 413,
        "hp": 55,
        "attack": 81,
        "defense": 60,
        "sp-atk": 50,
        "sp-def": 70,
        "speed": 97
      }
    },
    {
      "id": 21,
      "name": "Spearow",
      "price": 1.00,
      "type": [
        "normal",
        "flying"
      ],
      "stats": {
        "total": 262,
        "hp": 40,
        "attack": 60,
        "defense": 30,
        "sp-atk": 31,
        "sp-def": 31,
        "speed": 70
      }
    },
    {
      "id": 22,
      "name": "Fearow",
      "price": 3.00,
      "type": [
        "normal",
        "flying"
      ],
      "stats": {
        "total": 442,
        "hp": 65,
        "attack": 90,
        "defense": 65,
        "sp-atk": 61,
        "sp-def": 61,
        "speed": 100
      }
    },
    {
      "id": 23,
      "name": "Ekans",
      "price": 3.00,
      "type": [
        "poison"
      ],
      "stats": {
        "total": 288,
        "hp": 35,
        "attack": 60,
        "defense": 44,
        "sp-atk": 40,
        "sp-def": 54,
        "speed": 55
      }
    },
    {
      "id": 24,
      "name": "Arbok",
      "price": 2.50,
      "type": [
        "poison"
      ],
      "stats": {
        "total": 448,
        "hp": 60,
        "attack": 95,
        "defense": 69,
        "sp-atk": 65,
        "sp-def": 79,
        "speed": 80
      }
    },
    {
      "id": 25,
      "name": "Pikachu",
      "price": 10.00,
      "type": [
        "electric"
      ],
      "stats": {
        "total": 320,
        "hp": 35,
        "attack": 55,
        "defense": 40,
        "sp-atk": 50,
        "sp-def": 50,
        "speed": 90
      }
    },
    {
      "id": 26,
      "name": "Raichu",
      "price": 3.00,
      "type": [
        "electric"
      ],
      "stats": {
        "total": 485,
        "hp": 60,
        "attack": 90,
        "defense": 55,
        "sp-atk": 90,
        "sp-def": 80,
        "speed": 110
      }
    },
    {
      "id": 27,
      "name": "Sandshrew",
      "price": 1.00,
      "type": [
        "ground"
      ],
      "stats": {
        "total": 300,
        "hp": 50,
        "attack": 75,
        "defense": 85,
        "sp-atk": 20,
        "sp-def": 30,
        "speed": 40
      }
    },
    {
      "id": 28,
      "name": "Sandslash",
      "price": 2.50,
      "type": [
        "ground"
      ],
      "stats": {
        "total": 450,
        "hp": 75,
        "attack": 100,
        "defense": 110,
        "sp-atk": 45,
        "sp-def": 55,
        "speed": 65
      }
    },
    {
      "id": 29,
      "name": "Nidoran♀",
      "price": 7.00,
      "type": [
        "poison"
      ],
      "stats": {
        "total": 275,
        "hp": 55,
        "attack": 47,
        "defense": 52,
        "sp-atk": 40,
        "sp-def": 40,
        "speed": 41
      }
    },
    {
      "id": 30,
      "name": "Nidorina",
      "price": 9.00,
      "type": [
        "poison"
      ],
      "stats": {
        "total": 365,
        "hp": 70,
        "attack": 62,
        "defense": 67,
        "sp-atk": 55,
        "sp-def": 55,
        "speed": 56
      }
    },
    {
      "id": 31,
      "name": "Nidoqueen",
      "price": 8.00,
      "type": [
        "poison",
        "ground"
      ],
      "stats": {
        "total": 505,
        "hp": 90,
        "attack": 92,
        "defense": 87,
        "sp-atk": 75,
        "sp-def": 85,
        "speed": 76
      }
    },
    {
      "id": 32,
      "name": "Nidoran♂",
      "price": 3.00,
      "type": [
        "poison"
      ],
      "stats": {
        "total": 273,
        "hp": 46,
        "attack": 57,
        "defense": 40,
        "sp-atk": 40,
        "sp-def": 40,
        "speed": 50
      }
    },
    {
      "id": 33,
      "name": "Nidorino",
      "price": 1.00,
      "type": [
        "poison"
      ],
      "stats": {
        "total": 365,
        "hp": 61,
        "attack": 72,
        "defense": 57,
        "sp-atk": 55,
        "sp-def": 55,
        "speed": 65
      }
    },
    {
      "id": 34,
      "name": "Nidoking",
      "price": 6.00,
      "type": [
        "poison",
        "ground"
      ],
      "stats": {
        "total": 505,
        "hp": 81,
        "attack": 102,
        "defense": 77,
        "sp-atk": 85,
        "sp-def": 75,
        "speed": 85
      }
    },
    {
      "id": 35,
      "name": "Clefairy",
      "price": 3.00,
      "type": [
        "fairy"
      ],
      "stats": {
        "total": 323,
        "hp": 70,
        "attack": 45,
        "defense": 48,
        "sp-atk": 60,
        "sp-def": 65,
        "speed": 35
      }
    },
    {
      "id": 36,
      "name": "Clefable",
      "price": 2.50,
      "type": [
        "fairy"
      ],
      "stats": {
        "total": 483,
        "hp": 95,
        "attack": 70,
        "defense": 73,
        "sp-atk": 95,
        "sp-def": 90,
        "speed": 60
      }
    },
    {
      "id": 37,
      "name": "Vulpix",
      "price": 1.00,
      "type": [
        "fire"
      ],
      "stats": {
        "total": 299,
        "hp": 38,
        "attack": 41,
        "defense": 40,
        "sp-atk": 50,
        "sp-def": 65,
        "speed": 65
      }
    },
    {
      "id": 38,
      "name": "Ninetales",
      "price": 3.00,
      "type": [
        "fire"
      ],
      "stats": {
        "total": 505,
        "hp": 73,
        "attack": 76,
        "defense": 75,
        "sp-atk": 81,
        "sp-def": 100,
        "speed": 100
      }
    },
    {
      "id": 39,
      "name": "Jigglypuff",
      "price": 4.00,
      "type": [
        "normal",
        "fairy"
      ],
      "stats": {
        "total": 270,
        "hp": 115,
        "attack": 45,
        "defense": 20,
        "sp-atk": 45,
        "sp-def": 25,
        "speed": 20
      }
    },
    {
      "id": 40,
      "name": "Wigglytuff",
      "price": 1.00,
      "type": [
        "normal",
        "fairy"
      ],
      "stats": {
        "total": 435,
        "hp": 140,
        "attack": 70,
        "defense": 45,
        "sp-atk": 85,
        "sp-def": 50,
        "speed": 45
      }
    },
    {
      "id": 41,
      "name": "Zubat",
      "price": 3.00,
      "type": [
        "poison",
        "flying"
      ],
      "stats": {
        "total": 245,
        "hp": 40,
        "attack": 45,
        "defense": 35,
        "sp-atk": 30,
        "sp-def": 40,
        "speed": 55
      }
    },
    {
      "id": 42,
      "name": "Golbat",
      "price": 1.00,
      "type": [
        "poison",
        "flying"
      ],
      "stats": {
        "total": 455,
        "hp": 75,
        "attack": 80,
        "defense": 70,
        "sp-atk": 65,
        "sp-def": 75,
        "speed": 90
      }
    },
    {
      "id": 43,
      "name": "Oddish",
      "price": 2.50,
      "type": [
        "poison",
        "grass"
      ],
      "stats": {
        "total": 320,
        "hp": 45,
        "attack": 50,
        "defense": 55,
        "sp-atk": 75,
        "sp-def": 65,
        "speed": 30
      }
    },
    {
      "id": 44,
      "name": "Gloom",
      "price": 5.00,
      "type": [
        "poison",
        "grass"
      ],
      "stats": {
        "total": 395,
        "hp": 60,
        "attack": 65,
        "defense": 70,
        "sp-atk": 85,
        "sp-def": 75,
        "speed": 40
      }
    },
    {
      "id": 45,
      "name": "Vileplume",
      "price": 7.00,
      "type": [
        "poison",
        "grass"
      ],
      "stats": {
        "total": 490,
        "hp": 75,
        "attack": 80,
        "defense": 85,
        "sp-atk": 110,
        "sp-def": 90,
        "speed": 50
      }
    },
    {
      "id": 46,
      "name": "Paras",
      "price": 1.00,
      "type": [
        "bug",
        "grass"
      ],
      "stats": {
        "total": 285,
        "hp": 35,
        "attack": 70,
        "defense": 55,
        "sp-atk": 45,
        "sp-def": 55,
        "speed": 25
      }
    },
    {
      "id": 47,
      "name": "Parasect",
      "price": 1.00,
      "type": [
        "bug",
        "grass"
      ],
      "stats": {
        "total": 405,
        "hp": 60,
        "attack": 95,
        "defense": 80,
        "sp-atk": 60,
        "sp-def": 80,
        "speed": 30
      }
    },
    {
      "id": 48,
      "name": "Venonat",
      "price": 3.00,
      "type": [
        "bug",
        "poison"
      ],
      "stats": {
        "total": 305,
        "hp": 60,
        "attack": 55,
        "defense": 50,
        "sp-atk": 40,
        "sp-def": 55,
        "speed": 45
      }
    },
    {
      "id": 49,
      "name": "Venomoth",
      "price": 9.00,
      "type": [
        "bug",
        "poison"
      ],
      "stats": {
        "total": 450,
        "hp": 70,
        "attack": 65,
        "defense": 60,
        "sp-atk": 90,
        "sp-def": 75,
        "speed": 90
      }
    },
    {
      "id": 50,
      "name": "Diglett",
      "price": 2.50,
      "type": [
        "ground"
      ],
      "stats": {
        "total": 265,
        "hp": 10,
        "attack": 55,
        "defense": 25,
        "sp-atk": 35,
        "sp-def": 45,
        "speed": 95
      }
    },
    {
      "id": 51,
      "name": "Dugtrio",
      "price": 9.00,
      "type": [
        "ground"
      ],
      "stats": {
        "total": 425,
        "hp": 35,
        "attack": 100,
        "defense": 50,
        "sp-atk": 50,
        "sp-def": 70,
        "speed": 120
      }
    },
    {
      "id": 52,
      "name": "Meowth",
      "price": 3.00,
      "type": [
        "normal"
      ],
      "stats": {
        "total": 290,
        "hp": 40,
        "attack": 45,
        "defense": 35,
        "sp-atk": 40,
        "sp-def": 40,
        "speed": 90
      }
    },
    {
      "id": 53,
      "name": "Persian",
      "price": 1.00,
      "type": [
        "normal"
      ],
      "stats": {
        "total": 440,
        "hp": 65,
        "attack": 70,
        "defense": 60,
        "sp-atk": 65,
        "sp-def": 65,
        "speed": 115
      }
    },
    {
      "id": 54,
      "name": "Psyduck",
      "price": 1.00,
      "type": [
        "water"
      ],
      "stats": {
        "total": 320,
        "hp": 50,
        "attack": 52,
        "defense": 48,
        "sp-atk": 65,
        "sp-def": 50,
        "speed": 55
      }
    },
    {
      "id": 55,
      "name": "Golduck",
      "price": 1.00,
      "type": [
        "water"
      ],
      "stats": {
        "total": 500,
        "hp": 80,
        "attack": 82,
        "defense": 78,
        "sp-atk": 95,
        "sp-def": 80,
        "speed": 85
      }
    },
    {
      "id": 56,
      "name": "Mankey",
      "price": 2.50,
      "type": [
        "fighting"
      ],
      "stats": {
        "total": 305,
        "hp": 40,
        "attack": 80,
        "defense": 35,
        "sp-atk": 35,
        "sp-def": 45,
        "speed": 70
      }
    },
    {
      "id": 57,
      "name": "Primeape",
      "price": 1.00,
      "type": [
        "fighting"
      ],
      "stats": {
        "total": 455,
        "hp": 65,
        "attack": 105,
        "defense": 60,
        "sp-atk": 60,
        "sp-def": 70,
        "speed": 95
      }
    },
    {
      "id": 58,
      "name": "Growlithe",
      "price": 1.00,
      "type": [
        "fire"
      ],
      "stats": {
        "total": 350,
        "hp": 55,
        "attack": 70,
        "defense": 45,
        "sp-atk": 70,
        "sp-def": 50,
        "speed": 60
      }
    },
    {
      "id": 59,
      "name": "Arcanine",
      "price": 1.00,
      "type": [
        "fire"
      ],
      "stats": {
        "total": 555,
        "hp": 90,
        "attack": 110,
        "defense": 80,
        "sp-atk": 100,
        "sp-def": 80,
        "speed": 95
      }
    },
    {
      "id": 60,
      "name": "Poliwag",
      "price": 1.00,
      "type": [
        "water"
      ],
      "stats": {
        "total": 300,
        "hp": 40,
        "attack": 50,
        "defense": 40,
        "sp-atk": 40,
        "sp-def": 40,
        "speed": 90
      }
    },
    {
      "id": 61,
      "name": "Poliwhirl",
      "price": 1.00,
      "type": [
        "water"
      ],
      "stats": {
        "total": 385,
        "hp": 65,
        "attack": 65,
        "defense": 65,
        "sp-atk": 50,
        "sp-def": 50,
        "speed": 90
      }
    },
    {
      "id": 62,
      "name": "Poliwrath",
      "price": 2.50,
      "type": [
        "water",
        "fighting"
      ],
      "stats": {
        "total": 510,
        "hp": 90,
        "attack": 95,
        "defense": 95,
        "sp-atk": 70,
        "sp-def": 90,
        "speed": 70
      }
    },
    {
      "id": 63,
      "name": "Abra",
      "price": 1.00,
      "type": [
        "psychic"
      ],
      "stats": {
        "total": 310,
        "hp": 25,
        "attack": 20,
        "defense": 15,
        "sp-atk": 105,
        "sp-def": 55,
        "speed": 90
      }
    },
    {
      "id": 64,
      "name": "Kadabra",
      "price": 1.00,
      "type": [
        "psychic"
      ],
      "stats": {
        "total": 400,
        "hp": 40,
        "attack": 35,
        "defense": 30,
        "sp-atk": 120,
        "sp-def": 70,
        "speed": 105
      }
    },
    {
      "id": 65,
      "name": "Alakazam",
      "price": 1.00,
      "type": [
        "psychic"
      ],
      "stats": {
        "total": 500,
        "hp": 55,
        "attack": 50,
        "defense": 45,
        "sp-atk": 135,
        "sp-def": 95,
        "speed": 120
      }
    },
    {
      "id": 66,
      "name": "Machop",
      "price": 1.00,
      "type": [
        "fighting"
      ],
      "stats": {
        "total": 305,
        "hp": 70,
        "attack": 80,
        "defense": 50,
        "sp-atk": 35,
        "sp-def": 35,
        "speed": 35
      }
    },
    {
      "id": 67,
      "name": "Machoke",
      "price": 1.00,
      "type": [
        "fighting"
      ],
      "stats": {
        "total": 405,
        "hp": 80,
        "attack": 100,
        "defense": 70,
        "sp-atk": 50,
        "sp-def": 60,
        "speed": 45
      }
    },
    {
      "id": 68,
      "name": "Machamp",
      "price": 2.50,
      "type": [
        "fighting"
      ],
      "stats": {
        "total": 505,
        "hp": 90,
        "attack": 130,
        "defense": 80,
        "sp-atk": 65,
        "sp-def": 85,
        "speed": 55
      }
    },
    {
      "id": 69,
      "name": "Bellsprout",
      "price": 1.00,
      "type": [
        "grass",
        "poison"
      ],
      "stats": {
        "total": 300,
        "hp": 50,
        "attack": 75,
        "defense": 35,
        "sp-atk": 70,
        "sp-def": 30,
        "speed": 40
      }
    },
    {
      "id": 70,
      "name": "Weepinbell",
      "price": 1.00,
      "type": [
        "grass",
        "poison"
      ],
      "stats": {
        "total": 390,
        "hp": 65,
        "attack": 90,
        "defense": 50,
        "sp-atk": 85,
        "sp-def": 45,
        "speed": 55
      }
    },
    {
      "id": 71,
      "name": "Victreebel",
      "price": 1.00,
      "type": [
        "grass",
        "poison"
      ],
      "stats": {
        "total": 490,
        "hp": 80,
        "attack": 105,
        "defense": 65,
        "sp-atk": 100,
        "sp-def": 70,
        "speed": 70
      }
    },
    {
      "id": 72,
      "name": "Tentacool",
      "price": 1.00,
      "type": [
        "water",
        "poison"
      ],
      "stats": {
        "total": 335,
        "hp": 40,
        "attack": 40,
        "defense": 35,
        "sp-atk": 50,
        "sp-def": 100,
        "speed": 70
      }
    },
    {
      "id": 73,
      "name": "Tentacruel",
      "price": 2.50,
      "type": [
        "water",
        "poison"
      ],
      "stats": {
        "total": 515,
        "hp": 80,
        "attack": 70,
        "defense": 65,
        "sp-atk": 80,
        "sp-def": 120,
        "speed": 100
      }
    },
    {
      "id": 74,
      "name": "Geodude",
      "price": 1.00,
      "type": [
        "ground",
        "rock"
      ],
      "stats": {
        "total": 300,
        "hp": 40,
        "attack": 80,
        "defense": 100,
        "sp-atk": 30,
        "sp-def": 30,
        "speed": 20
      }
    },
    {
      "id": 75,
      "name": "Graveler",
      "type": [
        "ground",
        "rock"
      ],
      "stats": {
        "total": 390,
        "hp": 55,
        "attack": 95,
        "defense": 115,
        "sp-atk": 45,
        "sp-def": 45,
        "speed": 35
      }
    },
    {
      "id": 76,
      "name": "Golem",
      "price": 3.00,
      "type": [
        "ground",
        "rock"
      ],
      "stats": {
        "total": 495,
        "hp": 80,
        "attack": 120,
        "defense": 130,
        "sp-atk": 55,
        "sp-def": 65,
        "speed": 45
      }
    },
    {
      "id": 77,
      "name": "Ponyta",
      "price": 3.00,
      "type": [
        "fire"
      ],
      "stats": {
        "total": 410,
        "hp": 50,
        "attack": 85,
        "defense": 55,
        "sp-atk": 65,
        "sp-def": 65,
        "speed": 90
      }
    },
    {
      "id": 78,
      "name": "Rapidash",
      "price": 3.00,
      "type": [
        "fire"
      ],
      "stats": {
        "total": 500,
        "hp": 65,
        "attack": 100,
        "defense": 70,
        "sp-atk": 80,
        "sp-def": 80,
        "speed": 105
      }
    },
    {
      "id": 79,
      "name": "Slowpoke",
      "price": 3.00,
      "type": [
        "water",
        "psychic"
      ],
      "stats": {
        "total": 315,
        "hp": 90,
        "attack": 65,
        "defense": 65,
        "sp-atk": 40,
        "sp-def": 40,
        "speed": 15
      }
    },
    {
      "id": 80,
      "name": "Slowbro",
      "price": 1.00,
      "type": [
        "water",
        "psychic"
      ],
      "stats": {
        "total": 490,
        "hp": 95,
        "attack": 75,
        "defense": 110,
        "sp-atk": 100,
        "sp-def": 80,
        "speed": 30
      }
    },
    {
      "id": 81,
      "name": "Magnemite",
      "price": 2.50,
      "type": [
        "electric",
        "steel"
      ],
      "stats": {
        "total": 325,
        "hp": 25,
        "attack": 35,
        "defense": 70,
        "sp-atk": 95,
        "sp-def": 55,
        "speed": 45
      }
    },
    {
      "id": 82,
      "name": "Magneton",
      "price": 1.00,
      "type": [
        "electric",
        "steel"
      ],
      "stats": {
        "total": 465,
        "hp": 50,
        "attack": 60,
        "defense": 95,
        "sp-atk": 120,
        "sp-def": 70,
        "speed": 70
      }
    },
    {
      "id": 83,
      "name": "Farfetch'd",
      "price": 3.00,
      "type": [
        "normal",
        "flying"
      ],
      "stats": {
        "total": 377,
        "hp": 52,
        "attack": 90,
        "defense": 55,
        "sp-atk": 58,
        "sp-def": 62,
        "speed": 60
      }
    },
    {
      "id": 84,
      "name": "Doduo",
      "price": 3.00,
      "type": [
        "normal",
        "flying"
      ],
      "stats": {
        "total": 310,
        "hp": 35,
        "attack": 85,
        "defense": 45,
        "sp-atk": 35,
        "sp-def": 35,
        "speed": 75
      }
    },
    {
      "id": 85,
      "name": "Dodrio",
      "price": 3.00,
      "type": [
        "normal",
        "flying"
      ],
      "stats": {
        "total": 470,
        "hp": 60,
        "attack": 110,
        "defense": 70,
        "sp-atk": 60,
        "sp-def": 60,
        "speed": 110
      }
    },
    {
      "id": 86,
      "name": "Seel",
      "price": 1.00,
      "type": [
        "water"
      ],
      "stats": {
        "total": 325,
        "hp": 65,
        "attack": 45,
        "defense": 55,
        "sp-atk": 45,
        "sp-def": 70,
        "speed": 45
      }
    },
    {
      "id": 87,
      "name": "Dewgong",
      "price": 2.50,
      "type": [
        "water",
        "ice"
      ],
      "stats": {
        "total": 475,
        "hp": 90,
        "attack": 70,
        "defense": 80,
        "sp-atk": 70,
        "sp-def": 95,
        "speed": 70
      }
    },
    {
      "id": 88,
      "name": "Grimer",
      "type": [
        "poison"
      ],
      "stats": {
        "total": 325,
        "hp": 80,
        "attack": 80,
        "defense": 50,
        "sp-atk": 40,
        "sp-def": 50,
        "speed": 25
      }
    },
    {
      "id": 89,
      "name": "Muk",
      "price": 1.00,
      "type": [
        "poison"
      ],
      "stats": {
        "total": 500,
        "hp": 105,
        "attack": 105,
        "defense": 75,
        "sp-atk": 65,
        "sp-def": 100,
        "speed": 50
      }
    },
    {
      "id": 90,
      "name": "Shellder",
      "type": [
        "water"
      ],
      "stats": {
        "total": 305,
        "hp": 30,
        "attack": 65,
        "defense": 100,
        "sp-atk": 45,
        "sp-def": 25,
        "speed": 40
      }
    },
    {
      "id": 91,
      "name": "Cloyster",
      "type": [
        "water",
        "ice"
      ],
      "stats": {
        "total": 525,
        "hp": 50,
        "attack": 95,
        "defense": 180,
        "sp-atk": 85,
        "sp-def": 45,
        "speed": 70
      }
    },
    {
      "id": 92,
      "name": "Gastly",
      "price": 3.00,
      "type": [
        "ghost",
        "poison"
      ],
      "stats": {
        "total": 310,
        "hp": 30,
        "attack": 35,
        "defense": 30,
        "sp-atk": 100,
        "sp-def": 35,
        "speed": 80
      }
    },
    {
      "id": 93,
      "name": "Haunter",
      "type": [
        "ghost",
        "poison"
      ],
      "stats": {
        "total": 405,
        "hp": 45,
        "attack": 50,
        "defense": 45,
        "sp-atk": 115,
        "sp-def": 55,
        "speed": 95
      }
    },
    {
      "id": 94,
      "name": "Gengar",
      "type": [
        "ghost",
        "poison"
      ],
      "stats": {
        "total": 500,
        "hp": 60,
        "attack": 65,
        "defense": 60,
        "sp-atk": 130,
        "sp-def": 75,
        "speed": 110
      }
    },
    {
      "id": 95,
      "name": "Onix",
      "price": 2.50,
      "type": [
        "rock",
        "ground"
      ],
      "stats": {
        "total": 385,
        "hp": 35,
        "attack": 45,
        "defense": 160,
        "sp-atk": 30,
        "sp-def": 45,
        "speed": 70
      }
    },
    {
      "id": 96,
      "name": "Drowzee",
      "price": 3.00,
      "type": [
        "psychic"
      ],
      "stats": {
        "total": 328,
        "hp": 60,
        "attack": 48,
        "defense": 45,
        "sp-atk": 43,
        "sp-def": 90,
        "speed": 42
      }
    },
    {
      "id": 97,
      "name": "Hypno",
      "price": 2.50,
      "type": [
        "psychic"
      ],
      "stats": {
        "total": 483,
        "hp": 85,
        "attack": 73,
        "defense": 70,
        "sp-atk": 73,
        "sp-def": 115,
        "speed": 67
      }
    },
    {
      "id": 98,
      "name": "Krabby",
      "price": 2.50,
      "type": [
        "water"
      ],
      "stats": {
        "total": 325,
        "hp": 30,
        "attack": 105,
        "defense": 90,
        "sp-atk": 25,
        "sp-def": 25,
        "speed": 50
      }
    },
    {
      "id": 99,
      "name": "Kingler",
      "type": [
        "water"
      ],
      "stats": {
        "total": 475,
        "hp": 55,
        "attack": 130,
        "defense": 115,
        "sp-atk": 50,
        "sp-def": 50,
        "speed": 75
      }
    },
    {
      "id": 100,
      "name": "Voltorb",
      "price": 2.50,
      "type": [
        "electric"
      ],
      "stats": {
        "total": 330,
        "hp": 40,
        "attack": 30,
        "defense": 50,
        "sp-atk": 55,
        "sp-def": 55,
        "speed": 100
      }
    },
    {
      "id": 101,
      "name": "Electrode",
      "price": 3.50,
      "type": [
        "electric"
      ],
      "stats": {
        "total": 490,
        "hp": 60,
        "attack": 50,
        "defense": 70,
        "sp-atk": 80,
        "sp-def": 80,
        "speed": 150
      }
    },
    {
      "id": 102,
      "name": "Exeggcute",
      "price": 3.50,
      "type": [
        "grass",
        "psychic"
      ],
      "stats": {
        "total": 325,
        "hp": 60,
        "attack": 40,
        "defense": 80,
        "sp-atk": 60,
        "sp-def": 45,
        "speed": 40
      }
    },
    {
      "id": 103,
      "name": "Exeggutor",
      "type": [
        "grass",
        "psychic"
      ],
      "stats": {
        "total": 530,
        "hp": 95,
        "attack": 95,
        "defense": 85,
        "sp-atk": 125,
        "sp-def": 75,
        "speed": 55
      }
    },
    {
      "id": 104,
      "name": "Cubone",
      "type": [
        "ground"
      ],
      "stats": {
        "total": 320,
        "hp": 50,
        "attack": 50,
        "defense": 95,
        "sp-atk": 40,
        "sp-def": 50,
        "speed": 35
      }
    },
    {
      "id": 105,
      "name": "Marowak",
      "price": 2.50,
      "type": [
        "ground"
      ],
      "stats": {
        "total": 425,
        "hp": 60,
        "attack": 80,
        "defense": 110,
        "sp-atk": 50,
        "sp-def": 80,
        "speed": 45
      }
    },
    {
      "id": 106,
      "name": "Hitmonlee",
      "price": 3.00,
      "type": [
        "fighting"
      ],
      "stats": {
        "total": 455,
        "hp": 50,
        "attack": 120,
        "defense": 53,
        "sp-atk": 35,
        "sp-def": 110,
        "speed": 87
      }
    },
    {
      "id": 107,
      "name": "Hitmonchan",
      "price": 2.50,
      "type": [
        "fighting"
      ],
      "stats": {
        "total": 455,
        "hp": 50,
        "attack": 105,
        "defense": 79,
        "sp-atk": 35,
        "sp-def": 110,
        "speed": 76
      }
    },
    {
      "id": 108,
      "name": "Lickitung",
      "price": 1.00,
      "type": [
        "normal"
      ],
      "stats": {
        "total": 385,
        "hp": 90,
        "attack": 55,
        "defense": 75,
        "sp-atk": 60,
        "sp-def": 75,
        "speed": 30
      }
    },
    {
      "id": 109,
      "name": "Koffing",
      "price": 2.50,
      "type": [
        "poison"
      ],
      "stats": {
        "total": 340,
        "hp": 40,
        "attack": 65,
        "defense": 95,
        "sp-atk": 60,
        "sp-def": 45,
        "speed": 35
      }
    },
    {
      "id": 110,
      "name": "Weezing",
      "price": 3.00,
      "type": [
        "poison"
      ],
      "stats": {
        "total": 490,
        "hp": 65,
        "attack": 90,
        "defense": 120,
        "sp-atk": 85,
        "sp-def": 70,
        "speed": 60
      }
    },
    {
      "id": 111,
      "name": "Rhyhorn",
      "price": 3.00,
      "type": [
        "ground",
        "rock"
      ],
      "stats": {
        "total": 345,
        "hp": 80,
        "attack": 85,
        "defense": 95,
        "sp-atk": 30,
        "sp-def": 30,
        "speed": 25
      }
    },
    {
      "id": 112,
      "name": "Rhydon",
      "price": 2.50,
      "type": [
        "ground",
        "rock"
      ],
      "stats": {
        "total": 485,
        "hp": 105,
        "attack": 130,
        "defense": 120,
        "sp-atk": 45,
        "sp-def": 45,
        "speed": 40
      }
    },
    {
      "id": 113,
      "name": "Chansey",
      "price": 1.00,
      "type": [
        "normal"
      ],
      "stats": {
        "total": 450,
        "hp": 250,
        "attack": 5,
        "defense": 5,
        "sp-atk": 35,
        "sp-def": 105,
        "speed": 50
      }
    },
    {
      "id": 114,
      "name": "Tangela",
      "price": 3.00,
      "type": [
        "grass"
      ],
      "stats": {
        "total": 435,
        "hp": 65,
        "attack": 55,
        "defense": 115,
        "sp-atk": 100,
        "sp-def": 40,
        "speed": 60
      }
    },
    {
      "id": 115,
      "name": "Kangaskhan",
      "price": 2.50,
      "type": [
        "normal"
      ],
      "stats": {
        "total": 490,
        "hp": 105,
        "attack": 95,
        "defense": 80,
        "sp-atk": 40,
        "sp-def": 80,
        "speed": 90
      }
    },
    {
      "id": 116,
      "name": "Horsea",
      "price": 1.00,
      "type": [
        "water"
      ],
      "stats": {
        "total": 295,
        "hp": 30,
        "attack": 40,
        "defense": 70,
        "sp-atk": 70,
        "sp-def": 25,
        "speed": 60
      }
    },
    {
      "id": 117,
      "name": "Seadra",
      "price": 1.00,
      "type": [
        "water"
      ],
      "stats": {
        "total": 440,
        "hp": 55,
        "attack": 65,
        "defense": 95,
        "sp-atk": 95,
        "sp-def": 45,
        "speed": 85
      }
    },
    {
      "id": 118,
      "name": "Goldeen",
      "price": 3.00,
      "type": [
        "water"
      ],
      "stats": {
        "total": 320,
        "hp": 45,
        "attack": 67,
        "defense": 60,
        "sp-atk": 35,
        "sp-def": 50,
        "speed": 63
      }
    },
    {
      "id": 119,
      "name": "Seaking",
      "price": 1.00,
      "type": [
        "water"
      ],
      "stats": {
        "total": 450,
        "hp": 80,
        "attack": 92,
        "defense": 65,
        "sp-atk": 65,
        "sp-def": 80,
        "speed": 68
      }
    },
    {
      "id": 120,
      "name": "Staryu",
      "price": 2.50,
      "type": [
        "water"
      ],
      "stats": {
        "total": 340,
        "hp": 30,
        "attack": 45,
        "defense": 55,
        "sp-atk": 70,
        "sp-def": 55,
        "speed": 85
      }
    },
    {
      "id": 121,
      "name": "Starmie",
      "price": 1.00,
      "type": [
        "water",
        "psychic"
      ],
      "stats": {
        "total": 520,
        "hp": 60,
        "attack": 75,
        "defense": 85,
        "sp-atk": 100,
        "sp-def": 85,
        "speed": 115
      }
    },
    {
      "id": 122,
      "name": "Mr. Mime",
      "price": 3.00,
      "type": [
        "psychic",
        "fairy"
      ],
      "stats": {
        "total": 460,
        "hp": 40,
        "attack": 45,
        "defense": 65,
        "sp-atk": 100,
        "sp-def": 120,
        "speed": 90
      }
    },
    {
      "id": 123,
      "name": "Scyther",
      "price": 3.00,
      "type": [
        "bug",
        "flying"
      ],
      "stats": {
        "total": 500,
        "hp": 70,
        "attack": 110,
        "defense": 80,
        "sp-atk": 55,
        "sp-def": 80,
        "speed": 105
      }
    },
    {
      "id": 124,
      "name": "Jynx",
      "price": 2.50,
      "type": [
        "ice",
        "psychic"
      ],
      "stats": {
        "total": 455,
        "hp": 65,
        "attack": 50,
        "defense": 35,
        "sp-atk": 115,
        "sp-def": 95,
        "speed": 95
      }
    },
    {
      "id": 125,
      "name": "Electabuzz",
      "price": 5.00,
      "type": [
        "electric"
      ],
      "stats": {
        "total": 490,
        "hp": 65,
        "attack": 83,
        "defense": 57,
        "sp-atk": 95,
        "sp-def": 85,
        "speed": 105
      }
    },
    {
      "id": 126,
      "name": "Magmar",
      "price": 3.00,
      "type": [
        "fire"
      ],
      "stats": {
        "total": 495,
        "hp": 65,
        "attack": 95,
        "defense": 57,
        "sp-atk": 100,
        "sp-def": 85,
        "speed": 93
      }
    },
    {
      "id": 127,
      "name": "Pinsir",
      "price": 1.00,
      "type": [
        "bug"
      ],
      "stats": {
        "total": 500,
        "hp": 65,
        "attack": 125,
        "defense": 100,
        "sp-atk": 55,
        "sp-def": 70,
        "speed": 85
      }
    },
    {
      "id": 128,
      "name": "Tauros",
      "price": 2.50,
      "type": [
        "normal"
      ],
      "stats": {
        "total": 490,
        "hp": 75,
        "attack": 100,
        "defense": 95,
        "sp-atk": 40,
        "sp-def": 70,
        "speed": 110
      }
    },
    {
      "id": 129,
      "name": "Magikarp",
      "price": 7.00,
      "type": [
        "water"
      ],
      "stats": {
        "total": 200,
        "hp": 20,
        "attack": 10,
        "defense": 55,
        "sp-atk": 15,
        "sp-def": 20,
        "speed": 80
      }
    },
    {
      "id": 130,
      "name": "Gyarados",
      "price": 9.00,
      "type": [
        "water",
        "flying"
      ],
      "stats": {
        "total": 540,
        "hp": 95,
        "attack": 125,
        "defense": 79,
        "sp-atk": 60,
        "sp-def": 100,
        "speed": 81
      }
    },
    {
      "id": 131,
      "name": "Lapras",
      "price": 8.00,
      "type": [
        "water",
        "ice"
      ],
      "stats": {
        "total": 535,
        "hp": 130,
        "attack": 85,
        "defense": 80,
        "sp-atk": 85,
        "sp-def": 95,
        "speed": 60
      }
    },
    {
      "id": 132,
      "name": "Ditto",
      "price": 3.00,
      "type": [
        "normal"
      ],
      "stats": {
        "total": 288,
        "hp": 48,
        "attack": 48,
        "defense": 48,
        "sp-atk": 48,
        "sp-def": 48,
        "speed": 48
      }
    },
    {
      "id": 133,
      "name": "Eevee",
      "price": 1.00,
      "type": [
        "normal"
      ],
      "stats": {
        "total": 325,
        "hp": 55,
        "attack": 55,
        "defense": 50,
        "sp-atk": 45,
        "sp-def": 65,
        "speed": 55
      }
    },
    {
      "id": 134,
      "name": "Vaporeon",
      "price": 6.00,
      "type": [
        "water"
      ],
      "stats": {
        "total": 525,
        "hp": 130,
        "attack": 65,
        "defense": 60,
        "sp-atk": 110,
        "sp-def": 95,
        "speed": 65
      }
    },
    {
      "id": 135,
      "name": "Jolteon",
      "price": 3.00,
      "type": [
        "electric"
      ],
      "stats": {
        "total": 525,
        "hp": 65,
        "attack": 65,
        "defense": 60,
        "sp-atk": 110,
        "sp-def": 95,
        "speed": 130
      }
    },
    {
      "id": 136,
      "name": "Flareon",
      "price": 2.50,
      "type": [
        "fire"
      ],
      "stats": {
        "total": 525,
        "hp": 65,
        "attack": 130,
        "defense": 60,
        "sp-atk": 95,
        "sp-def": 110,
        "speed": 65
      }
    },
    {
      "id": 137,
      "name": "Porygon",
      "price": 1.00,
      "type": [
        "normal"
      ],
      "stats": {
        "total": 395,
        "hp": 65,
        "attack": 60,
        "defense": 70,
        "sp-atk": 85,
        "sp-def": 75,
        "speed": 40
      }
    },
    {
      "id": 138,
      "name": "Omanyte",
      "price": 3.00,
      "type": [
        "rock",
        "water"
      ],
      "stats": {
        "total": 355,
        "hp": 35,
        "attack": 40,
        "defense": 100,
        "sp-atk": 90,
        "sp-def": 55,
        "speed": 35
      }
    },
    {
      "id": 139,
      "name": "Omastar",
      "price": 4.00,
      "type": [
        "rock",
        "water"
      ],
      "stats": {
        "total": 495,
        "hp": 70,
        "attack": 60,
        "defense": 125,
        "sp-atk": 115,
        "sp-def": 70,
        "speed": 55
      }
    },
    {
      "id": 140,
      "name": "Kabuto",
      "price": 1.00,
      "type": [
        "rock",
        "water"
      ],
      "stats": {
        "total": 355,
        "hp": 30,
        "attack": 80,
        "defense": 90,
        "sp-atk": 55,
        "sp-def": 45,
        "speed": 55
      }
    },
    {
      "id": 141,
      "name": "Kabutops",
      "price": 3.00,
      "type": [
        "rock",
        "water"
      ],
      "stats": {
        "total": 495,
        "hp": 60,
        "attack": 115,
        "defense": 105,
        "sp-atk": 65,
        "sp-def": 70,
        "speed": 80
      }
    },
    {
      "id": 142,
      "name": "Aerodactyl",
      "price": 1.00,
      "type": [
        "rock",
        "flying"
      ],
      "stats": {
        "total": 515,
        "hp": 80,
        "attack": 105,
        "defense": 65,
        "sp-atk": 60,
        "sp-def": 75,
        "speed": 130
      }
    },
    {
      "id": 143,
      "name": "Snorlax",
      "price": 2.50,
      "type": [
        "normal"
      ],
      "stats": {
        "total": 540,
        "hp": 160,
        "attack": 110,
        "defense": 65,
        "sp-atk": 65,
        "sp-def": 110,
        "speed": 30
      }
    },
    {
      "id": 144,
      "name": "Articuno",
      "price": 5.00,
      "type": [
        "ice",
        "flying"
      ],
      "stats": {
        "total": 580,
        "hp": 90,
        "attack": 85,
        "defense": 100,
        "sp-atk": 95,
        "sp-def": 125,
        "speed": 85
      }
    },
    {
      "id": 145,
      "name": "Zapdos",
      "price": 7.00,
      "type": [
        "electric",
        "flying"
      ],
      "stats": {
        "total": 580,
        "hp": 90,
        "attack": 90,
        "defense": 85,
        "sp-atk": 125,
        "sp-def": 90,
        "speed": 100
      }
    },
    {
      "id": 146,
      "name": "Moltres",
      "price": 1.00,
      "type": [
        "fire",
        "flying"
      ],
      "stats": {
        "total": 580,
        "hp": 90,
        "attack": 100,
        "defense": 90,
        "sp-atk": 125,
        "sp-def": 85,
        "speed": 90
      }
    },
    {
      "id": 147,
      "name": "Dratini",
      "price": 1.00,
      "type": [
        "dragon"
      ],
      "stats": {
        "total": 300,
        "hp": 41,
        "attack": 64,
        "defense": 45,
        "sp-atk": 50,
        "sp-def": 50,
        "speed": 50
      }
    },
    {
      "id": 148,
      "name": "Dragonair",
      "price": 3.00,
      "type": [
        "dragon"
      ],
      "stats": {
        "total": 420,
        "hp": 61,
        "attack": 84,
        "defense": 65,
        "sp-atk": 70,
        "sp-def": 70,
        "speed": 70
      }
    },
    {
      "id": 149,
      "name": "Dragonite",
      "price": 9.00,
      "type": [
        "dragon",
        "flying"
      ],
      "stats": {
        "total": 600,
        "hp": 91,
        "attack": 134,
        "defense": 95,
        "sp-atk": 100,
        "sp-def": 100,
        "speed": 80
      }
    },
    {
      "id": 150,
      "name": "Mewtwo",
      "price": 2.50,
      "type": [
        "psychic"
      ],
      "stats": {
        "total": 680,
        "hp": 106,
        "attack": 110,
        "defense": 90,
        "sp-atk": 154,
        "sp-def": 90,
        "speed": 130
      }
    },
    {
      "id": 151,
      "name": "Mew",
      "price": 9.00,
      "type": [
        "psychic"
      ],
      "stats": {
        "total": 600,
        "hp": 100,
        "attack": 100,
        "defense": 100,
        "sp-atk": 100,
        "sp-def": 100,
        "speed": 100
      }
    }
  ]



nomes=''
  for (i of pokemons){
    nomes+=i.name
    nomes+=', '
  }
console.log(nomes)
nome_order=pokemons.filter(p=>p.name.includes(nomes))
//console.log(nome_order)
