import SearchBar from './SearchBar'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import rymship from './rym-ship.png'
import './navbar.css'

const Nav = ({ onSearch, setAccess, access, handleToggle, isDarkMode }) => {

  const renderNav = useLocation().pathname !== '/';
  const navigate = useNavigate();

  const handleLogOut = () =>{
    setAccess(false)
    navigate('/')
  }


  return (
    <nav className='navbar'> 
        { renderNav ? ( <> 
        <SearchBar onSearch={onSearch}/>
        <div className="nav-div">
          <button className="nav-btn"> <NavLink to='allcharacters' className="nav-btn-link">  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ isDarkMode ? '#524334' : '#7ABFB8'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg> <span className='title-hover'> All Characters </span> </NavLink></button>
          <button className="nav-btn"> <NavLink to='about' className="nav-btn-link">  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ isDarkMode ? '#524334' : '#7ABFB8'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg> <span className='title-hover'> About </span> </NavLink></button>
          <button className="nav-btn"> <NavLink to='home' className="nav-btn-link"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ isDarkMode ? '#524334' : '#7ABFB8'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> </NavLink> <span className='title-hover'> Home </span> </button> 
          <button className="nav-btn"> <NavLink to='favorites' className="nav-btn-link"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ isDarkMode ? '#524334' : '#7ABFB8'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> <span className='title-hover'> Favorites </span> </NavLink> </button> 
          <button className="nav-btn" onClick={handleLogOut}> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ isDarkMode ? '#524334' : '#7ABFB8'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"/></svg> <span className='title-hover'> Log Out </span> </button> 
          <button id="darkmode-btn" className="nav-btn" onClick={handleToggle}>
            { 
            isDarkMode 
            ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ isDarkMode ? '#524334' : '#7ABFB8'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
            : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ isDarkMode ? '#524334' : '#7ABFB8'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg> 
            }
          </button>
        </div>
        
        </> ) : ( <> 
        <div className="nav-div nav-form">

          <div className="btn-nav-box">
            <button id="darkmode-btn" className="nav-btn" onClick={handleToggle}>
              { 
              isDarkMode 
              ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ isDarkMode ? '#524334' : '#7ABFB8'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
              : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ isDarkMode ? '#524334' : '#7ABFB8'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg> 
              }
            </button>
          </div>

            <img src='https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png' alt="rym" className='form-nav-imgword'/>
            <img src={rymship} alt="rym" className='form-nav-img'/>
        </div>
        
        </> )}
    </nav>
  )
}

export default Nav