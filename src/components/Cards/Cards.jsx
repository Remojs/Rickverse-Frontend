import Card from './Card';
import './cards.css'

export default function Cards({characters, onClose}) {
   return(
      <div className="cards-box">
         <div className='cards-container'>
            { characters.map((char) => 
            <Card 
               key={char.id}
               id={char.id}
               name={char.name}
               species={char.species}
               gender={char.gender}
               image={char.image}
               origin={char.origin.name}
               onClose={onClose}/> ) } 
         </div>
      </div>
   )
}
