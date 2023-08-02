import React from 'react'
import Card from '../Cards/Card'
import Pagination from './Pagination';
import './allcharacters.css'

const AllCharacters = ( {allCharacters, prev, next, onNext, onPrevious} ) => {
  return (
    <div>
      <Pagination prev={prev} next={next} onPrevious={onPrevious} onNext={onNext}/>
        <div className="allchars-container">
          { allCharacters.map((char) => 
                <Card 
                  key={char.id}
                  id={char.id}
                  name={char.name}
                  species={char.species}
                  gender={char.gender}
                  image={char.image}
                  origin={char.origin.name}
            /> ) }
        </div>
      <Pagination prev={prev} next={next} onPrevious={onPrevious} onNext={onNext}/>
    </div>
  )
}

export default AllCharacters