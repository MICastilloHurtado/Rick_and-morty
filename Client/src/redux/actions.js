import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from "./action-types";
import axios from 'axios'

export const addFav = (character) =>{
   
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
         return async (dispatch) => {
         const {data} = await axios.post(endpoint, character)
         if(!data.length)throw new Error('No hay favoritos')
         
         return dispatch(
            {type: ADD_FAV, 
            typeload: data
         });
      };
   } catch (error) {
      console.log(error.message)
   }
};

      


export const removeFav = (id) =>{
    
   try {
       const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
         return async (dispatch) => {
         const {data} =  await axios.delete(endpoint)
         
         if(!data.length)throw new Error('No hay favoritos')

         return dispatch({
            type: REMOVE_FAV,
            typeload: data,
      });
      };
      } catch (error) {
         console.log(error.message)
      }
    
     
   };


export const filterCards = (gender) => {
    return{type: FILTER, typeload:gender}
}

export const orderCards = (orden) => {
    return{type:ORDER, typeload:orden}
}