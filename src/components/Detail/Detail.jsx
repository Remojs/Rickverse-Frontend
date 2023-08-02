import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import './detail.css'

// const API_URL = 'https://be-a-rym.up.railway.app/api/character/'
// const API_KEY = '13067cebc819.970a6200dc6c67774411'

const Detail = () => {
  
  const {id} = useParams();
  const [character, setCharacter] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleEpisodes = () => {
    setIsOpen(!isOpen)
  }

  const episodeSplitter = (ep) => ep.split("/").pop();

  useEffect(() => {
    axios(`https://rickverse-backend-cive-dev.fl0.io/rickandmorty/character/${id}`)
    .then(response => response.data)
    .then((data) => {
        if (data.name) setCharacter(data) 
        else window.alert('¡No hay personaje con este ID!');
      });
      return setCharacter({}); 
    }, [id]);



  return (
    <div className='container'> 
        <div className="detail-border">
          <div className="detail-box">
            <div className="imgbox">
                <img src={character?.image} alt={character?.name} className='detail-img' />
                <h2 className='info-name'> <span className="id" style={{ fontSize: character?.name?.length > 15 ? "15px" : "25px" }}>  {character?.name} </span> - #{character?.id} </h2>
            </div>
            <div className="info-box">
              <table>
                <tbody>
                  <tr>
                    <td><span class="info"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z"/></svg> Origin: </span></td>
                    <td className='result'  style={{ fontSize: character?.origin?.name.length > 18 ? "10px" : "20px" }}>{character?.origin?.name}</td>
                  </tr>

                  <tr>
                    <td><span class="info"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Gender: </span></td>
                    <td className='result' style={{ fontSize: character?.gender?.length > 18 ? "10px" : "20px" }}>{character?.gender}</td>
                  </tr>

                  <tr>
                    <td><span class="info"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg> Status: </span></td>
                    <td className='result' style={{ fontSize: character?.status?.length > 18 ? "10px" : "20px" }}>{character?.status}</td>
                  </tr>

                  <tr>
                    <td><span class="info"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg> Specie: </span></td>
                    <td className='result' style={{ fontSize: character?.species?.length > 18 ? "10px" : "20px" }}>{character?.species}</td>
                  </tr>

                  <tr>
                    <td><span class="info"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg> Location: </span></td>
                    <td className='result' style={{ fontSize: character?.location?.name?.length > 20 ? "9px" : character?.location?.name?.length > 15 ? '12px' : '20px' }}>{character?.location?.name ? character?.location?.name : 'unknown'}</td>
                  </tr>

                  <tr>
                    <td><span class="info"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg> Type: </span></td>
                    <td className='result' style={{ fontSize: character?.type?.length > 15 ? "10px" : "20px" }}>{character?.type ? character?.type : 'unknown'}</td>
                  </tr>
                </tbody>
              </table>

              <button className='episodes-btn' onClick={handleEpisodes}> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg> </button>

              {isOpen && 
                <div className='episodes-box'>
                  <h1 className='title-episodes'> Episodes </h1>
                  <div className="episodes"> { character.episode.map((ep) =>  <h6 className='episode-bubble'>{episodeSplitter(ep)}</h6>)}</div>
                </div>
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default Detail