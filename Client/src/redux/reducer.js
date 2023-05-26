import { ADD_FAV, REMOVE_FAV, FILTER, ORDER} from "./action-types"

const initialState = {
    myFavorites:[],
    allCharactersFav:[]
}

function reducer(state = initialState, {type, typeload}){
    switch(type){
        case ADD_FAV:
            return { ...state, myFavorites: typeload, allCharacters: typeload };
            // return {...state,           
            //     myFavorites: [...state.allCharactersFav, typeload],
            //     allCharactersFav: [...state.allCharactersFav, typeload]}
        
        case REMOVE_FAV:
            return { ...state, myFavorites: typeload }    
        // return {...state,
        //         myFavorites: state.myFavorites.filter(fav=>fav.id !== typeload)}

        case FILTER:
            const charactersFiltered = state.allCharactersFav.filter(character => character.gender === typeload)
            return{
                ...state,
                myFavorites:
                typeload === 'allCharacters'?
                [...state.allCharactersFav]:
                charactersFiltered}

        case ORDER:
            const charactersFilteredCopy = [...state.allCharactersFav]
            return{
                ...state,
                myFavorites:
                typeload ==='A'?
                charactersFilteredCopy.sort((a,b) => a.id - b.id):
                charactersFilteredCopy.sort((a,b) => b.id - a.id) }
        
        default:
            return{...state}
    }

}

export default reducer