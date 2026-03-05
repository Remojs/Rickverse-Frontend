import React, {useState} from "react";
import './navbar.css'

const SearchBar = ({onSearch, loadingSearch}) => {
   
   let [id, setId] = useState('')

   let handleChange = (event) => {
      setId(event.target.value) 
   }

   const handleSearch = () => {
      onSearch(id)
      setId('')
   }

   return (
      <div className="searchbar-div">
         <img src="https://static.vecteezy.com/system/resources/previews/015/696/386/original/portal-in-space-to-other-universes-png.png" alt="" className="nav-img" />
         <input className="searchbar-input" type='search' onChange={handleChange} value={id} onKeyDown={(e) => e.key === 'Enter' && handleSearch()}/>
         <button onClick={handleSearch} className="searchbar-button" disabled={loadingSearch}>
            {loadingSearch ? <span className="btn-spinner"></span> : 'Agregar'}
         </button>
      </div>
   );
}
 
export default SearchBar