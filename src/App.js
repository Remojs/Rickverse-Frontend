// Dependencies
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
//Components
import Cards from './components/Cards/Cards';
import Nav from './components/Navbar/Nav';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites';
import AllCharacters from './components/AllCharacters/AllCharacters';

let App = () => {

const [characters, setCharacters] = useState([])
const [allCharacters, setAllCharacters] = useState([])
const [allCharactersInfo, setAllCharactersInfo] = useState([])
const [access, setAccess] = useState(false)
const [isDarkMode, setIsDarkMode] = useState(false)
const [loadingSearch, setLoadingSearch] = useState(false)
const navigate = useNavigate()

//DARKMODE FUNCTION
const handleToggle = () => {
   setIsDarkMode(!isDarkMode);
 };

// SEARCH FUNCTION API
const onSearch = async (id) => {
      setLoadingSearch(true)
      try{
         const res = await axios(`https://rickverse-backend.onrender.com/rickandmorty/character/${id}`)
         const data = res.data
            if (data.name){
               const characterExists = characters.filter((char) => char.id === data.id)
                  if (characterExists.length === 0) {
                     setCharacters((oldChars) => [...oldChars, data])
                     toast.success(`${data.name} agregado!`)
                  } else toast.error('¡Este personaje ya fue agregado!')
            } else toast.error('¡No hay personajes con este ID!');
         } catch (error) {
            console.log(error)
            toast.error('Error al buscar el personaje.')
         } finally {
            setLoadingSearch(false)
         }
}

// CLOSE CARD FUNCTION API
const onClose = (id) => {
   const charFilter = characters.filter((character) => character.id !== id)
   setCharacters(charFilter)
}

//LOGIN FUNCTION
const login = async (userData) => {
   navigate('/home');
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
}, [access, navigate])

//RENDER
   return (
      <div className='App'>
         <div className={isDarkMode ? "dark" : ""}>
         <Toaster position="top-right" toastOptions={{ style: { fontFamily: 'Orbitron, sans-serif', fontSize: '12px' } }} />
         <Nav onSearch={onSearch} access={access} setAccess={setAccess} handleToggle={handleToggle} isDarkMode={isDarkMode} loadingSearch={loadingSearch}/>
         <Routes>
            <Route path='/' element={<Form login={login} isDarkMode={isDarkMode}/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} loadingSearch={loadingSearch}/>} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/allcharacters' element={<AllCharacters  allCharacters={allCharacters} prev={allCharactersInfo.prev} next={allCharactersInfo.next} onPrevious={onPrevious} onNext={onNext} />} />
         </Routes>
         </div>
      </div>
   );
}

export default App; 
