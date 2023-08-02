import React, {useState} from "react";
import './navbar.css'

const SearchBar = ({onSearch}) => {
   
   let [id, setId] = useState('')

   let handleChange = (event) => {
      setId(event.target.value) 
   }

   return (
      <div className="searchbar-div">
         <img src="https://static.vecteezy.com/system/resources/previews/015/696/386/original/portal-in-space-to-other-universes-png.png" alt="" className="nav-img" />
         <input className="searchbar-input" type='search' onChange={handleChange} value={id}/>
         <button onClick={() => onSearch(id)} className="searchbar-button">Agregar</button>
      </div>
   );
}
 
export default SearchBar