// Dependencies
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios';
//Components
import About from './components/About/About';
import Cards from './components/Cards/Cards';
import Nav from './components/Navbar/Nav';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites';
import AllCharacters from './components/AllCharacters/AllCharacters';

const URL = 'http://localhost:3001/rickandmorty/login/';

let App = () => {

const [characters, setCharacters] = useState([])
const [allCharacters, setAllCharacters] = useState([])
const [allCharactersInfo, setAllCharactersInfo] = useState([])
const [access, setAccess] = useState(false)
const [isDarkMode, setIsDarkMode] = useState(false)
const navigate = useNavigate()

//DARKMODE FUNCTION
const handleToggle = () => {
   setIsDarkMode(!isDarkMode);
 };

// SEARCH FUNCTION API
const onSearch = async (id) => {
      try{
         const res = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         const data = res.data
            if (data.name){
               const characterExists = characters.filter((char) => char.id === data.id)
                  if (characterExists.length === 0) setCharacters((oldChars) => [...oldChars, data]) 
                  else window.alert('¡Este personaje ya ha sido agregado!')
            } else window.alert('¡No hay personajes con este ID!');
         } catch (error) {
            console.log(error)
            window.alert('Ocurrió un error al buscar el personaje.')
         }
}

// CLOSE CARD FUNCTION API
const onClose = (id) => {
   const charFilter = characters.filter((character) => character.id !== id)
   setCharacters(charFilter)
}

//LOGIN FUNCTION
const login = async (userData) => {
   try{
      const { email, pass } = userData; //traemos email y pass desde el form
      const { data } = await axios(`${URL}?email=${email}&password=${pass}`) //obtenemos data desde la paticion axios
      const { access } = data; 

      setAccess(data);
      access && navigate('/home');

   } catch (error) {
      console.log(error.message)
   }
}

const getAllCharacters = async(url) => {
   try {
      const response = await axios(url)
      const data = response.data
      setAllCharacters(data.results)
      setAllCharactersInfo(data.info)
   } catch (error) {
      console.log(error)
   }
}

const onPrevious = () => {
   getAllCharacters(allCharactersInfo.prev)
}

const onNext = () => {
   getAllCharacters(allCharactersInfo.next)
}

useEffect(() => {
   getAllCharacters('https://rickandmortyapi.com/api/character')
}, [])

useEffect(() => {
   !access && navigate('/')
}, [access])

//RENDER
   return (
      <div className='App'>
         <div className={isDarkMode ? "dark" : ""}>
         <Nav onSearch={onSearch} access={access} setAccess={setAccess} handleToggle={handleToggle} isDarkMode={isDarkMode}/>
         <Routes>
            <Route path='/' element={<Form login={login} isDarkMode={isDarkMode}/>} />
            <Route path='/about' element={<About />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/allcharacters' element={<AllCharacters  allCharacters={allCharacters} prev={allCharactersInfo.prev} next={allCharactersInfo.next} onPrevious={onPrevious} onNext={onNext} />} />
         </Routes>
         </div>
      </div>
   );
}

export default App; 
