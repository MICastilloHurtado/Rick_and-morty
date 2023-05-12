import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from "./action-types";

export const addFav = (character) =>{
    return{type: ADD_FAV, typeload:character}
}

export const removeFav = (id) =>{
    return{type: REMOVE_FAV, typeload:id}
}

export const filterCards = (gender) => {
    return{type: FILTER, typeload:gender}
}

export const orderCards = (orden) => {
    return{type:ORDER, typeload:orden}
}