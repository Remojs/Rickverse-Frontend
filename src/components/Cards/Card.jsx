import { NavLink } from 'react-router-dom'
import {addFav, removeFav} from '../../redux/actions'
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import './cards.css'

function Card({id, name, species, gender, image, origin, onClose, addFav, removeFav, myFavorites}) {

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id)
      }
      else {
         setIsFav(true)
         addFav({id, name, species, gender, image})
      }
      console.log(myFavorites)
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if(fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id])

   return (
      <>
         <div className="card">
         <div className="content">
            <div className="top-box">
               <div className='button-box'>
               {onClose && <button className='card-close-btn' onClick={() => onClose(id)}> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> </button>}
                  <button onClick={handleFavorite} className='card-fav-btn'> 
                  { 
                  isFav 
                  ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> 
                  : <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke='currentColor' stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                  } 
                  </button>
               </div>

               <div className="top">
                  <p className='card-t'>#{id}</p>
               </div>
            </div>
            <div className="middle">
               <p className='card-m'> 
                  <NavLink to={`/detail/${id}`} className='card-title' style={{fontSize: name.length > 25 ? '7px' : (name.length > 15 ? '10px' : '12px')}}> 
                     <h2 className='card-title' > {name} </h2> 
                  </NavLink> 
               </p>
               <span><img  src= {image} alt={name} classname='card-image'/></span>
               <hr />
            </div>

            <div className="bottom">
               <p className='card-b'>{gender}</p>
               <p className='card-b'>{species}</p>
            </div>
         </div>
         </div>
      </>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites:state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFav: (character) => { dispatch (addFav(character)) },
      removeFav: (id) => { dispatch (removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);