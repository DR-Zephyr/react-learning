// import { heroes } from './data/heroes';
import { heroes, owners } from "../data/heroes"

// console.log(owners);

const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id)
}

const getHeroeByOwner = (owner) => {
  return heroes.filter((heroe) => heroe.owner === owner)
}

// console.log(getHeroeByOwner('Marvel'));

export { getHeroeById, getHeroeByOwner }
