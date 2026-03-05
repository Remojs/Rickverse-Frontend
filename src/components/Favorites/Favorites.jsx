import Card from "../Cards/Card";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards, speciesCards } from "../../redux/actions";
import { useState } from "react";
import './favorites.css'

const Favorites = ({ myFavorites }) => {
    const dispatch = useDispatch();

    const [aux, setAux] = useState(false)

    const handleOrder=(event)=>{
        if(!aux){
            dispatch(orderCards(event.target.value))
        setAux(true);
        }
        else{
            dispatch(orderCards(event.target.value))
            setAux(false);
        }
    }

    const handleFilter = (event) =>{
        dispatch(filterCards(event.target.value))
    }

    const handleSpecies = (event) =>{
        dispatch(speciesCards(event.target.value))
    }

    return(
        <>
        <div className="select-container">
            <select className="select-filter" onClick={handleOrder}>
                <option>---ORDER---</option>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select className="select-filter" onChange={handleFilter}>
                <option>---GENDER---</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
                <option value="allCharacters">All Characters</option>
            </select>
            <select className="select-filter" onChange={handleSpecies}>
                <option>---SPECIES---</option>
                <option value="Human">Human</option>
                <option value="Humanoid">Humanoid</option>
                <option value="Alien">Alien</option>
                <option value="Cronenberg">Cronenberg</option>
                <option value="Animal">Animal</option>
                <option value="Robot">Robot</option>
                <option value="Mythological Creature">Myth.Creature</option>
                <option value="allSpecies">All Species</option>
            </select>
        </div>
        <div className="cards-container">
            { myFavorites?.length === 0 || !myFavorites ? (
               <div className="empty-state">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                  <h2 className="empty-title">No tenés favoritos aún</h2>
                  <p className="empty-sub">Agregá personajes desde las cards con el botón de corazón</p>
               </div>
            ) : (
            myFavorites?.map(fav => (
               <Card 
                  key={fav.id}
                  id={fav.id}
                  name={fav.name}
                  species={fav.species}
                  gender={fav.gender}
                  image={fav.image}
                  onClose={fav.onClose}
               />
            ))
            )}
        </div>
        </>
    )
}

const mapStateToProps = (state) =>{
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites)