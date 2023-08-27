# Random Pokemon

## Link to App: [GitHub Page](https://davidmiles1925.github.io/random-pokemon-react/)

Current Version Deployed: Version 1.2  
In Development: Version 2.0

## Project Description

This project was created in effort to teach my family how to play pokemon. My son and I have played for years, but at the time of writing this, my wife and daughter have only started playing recenly. They have reached a point where it would be advantageous to be able to recall each pokemon from memory, so I developed this tool to aid them in that endeavor. It will grow over time.

### Within this repository:

#### Random Pokemon Generator

This page returns a single random pokemon and its accociated data.

<img src="./src/images/readme/screenshot_v1.png" alt="draft" width="200"/>

#### Pokeomon of the Day

Future Devlopement: This feature will deliver a single pokemon daily to help new players commit the Pokedex to memory.

### Outside of this repository:

#### GetPokemon

[Database Builder Utility](https://github.com/DavidMiles1925/get-pokemon):
This program was written to gather the necessary data for the Random Pokemon App. I send reqests to my own API instead of using the public API. This is done for several reasons, the foremost of which is that I wanted to be able to currate the data. PokeAPI does a great job of following patterns for the most part, but occasionally breaks them which makes automatted curration difficult in some instances. Since I need an API for my user athentication anyway, it was easiest to just incorporate my own pokemon database into the API. Click the link for more info.

#### Random Pokemon API

Good News! This project is in active development. This will add user authentication.

[Random Pokemon API](https://github.com/DavidMiles1925/Random-Pokemon): The API is responsible for serving the Random Pokemon UI with pokemon data and user data.

## Docuentation

**Under Construction**

Note (mostly to myself): Code is in need of refactoring. After completely breaking the repo and reverting to a previous version, I was haveing difficulty passing data between components for some reason. I used a quick fix by duplicating code in App.js instead of writing a new `getTypeData()` function, but this all needs to be encapsulated and duplicate code eliminated.

### Future Development

**Version 2:**

- Pokemon of the day (Manual Update daily, API and automation coming in version 3.0.)
- Add search function
- Move "New Pokemon!" button above cards.
- Update `Header` component
- Add `Footer` component

Version Notes:

- Refactor still needed, having A LOT of difficulty with damage object.
- Updated react-router-dom to version 6.15.0, reafactored code for changes:
  -- Switch->Routes
  -- Redirect->Navigate
- Header Componet:
  -- Added links for search and random generator

### Verion History

**Version 1.1:**

- Added responsive design

**Version 1.2:**

- Fixed bug causing white space at the bottom of large screens

###########################################

## Thanks To:

[PokeAPI](https://pokeapi.co/), a complete, accurate, and easy to use API that supplied the raw data for this project.

repo.tree.items.[#].name
