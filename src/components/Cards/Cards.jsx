import Card from './Card';
import './cards.css'

export default function Cards({characters, onClose, loadingSearch}) {
   return(
      <div className="cards-box">
         {loadingSearch && (
            <div className="search-loading">
               <div className="spinner"></div>
               <p className="loading-text">Buscando personaje...</p>
            </div>
         )}
         {!loadingSearch && characters.length === 0 && (
            <div className="empty-state">
               <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
               <h2 className="empty-title">No hay personajes cargados</h2>
               <p className="empty-sub">Buscá un personaje por ID usando la barra de arriba</p>
            </div>
         )}
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
