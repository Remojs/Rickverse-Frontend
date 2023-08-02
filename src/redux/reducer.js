const initialState = { //ejemplos de states 
    myFavorites: [],
    allCharactersFav: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_FAV':
            return { ...state, myFavorites: action.payload, allCharactersFav: action.payload };

        case 'REMOVE_FAV':
                return { ...state, myFavorites: action.payload, allCharactersFav: action.payload };

        case 'FILTER':
            const allCharactersFilter = state.allCharactersFav.filter(character =>
                character.gender === action.payload
            )
            return{
                ...state,
                myFavorites:
                    action.payload === "allCharacters" ?
                    [...state.allCharactersFav] :
                    allCharactersFilter
            }

        case 'ORDER':
            const allCharactersFavCopy = [...state.myFavorites]
            return{
                ...state,
                myFavorites: 
                    action.payload === 'A' 
                    ? allCharactersFavCopy.sort((a,b) => a.id - b.id) 
                    : allCharactersFavCopy.sort((a,b) => b.id - a.id)
            }

            case 'SPECIES':
                const allCharactersFilterSpecies = state.allCharactersFav.filter(character =>
                    character.species === action.payload
                )
                return{
                    ...state,
                    myFavorites:
                        action.payload === "allSpecies" ?
                        [...state.allCharactersFav] :
                        allCharactersFilterSpecies
                };

        default:
            return {...state};
    }
    //se crea el caso default por si los otros fallan
}//se crea el reducer

export default reducer;