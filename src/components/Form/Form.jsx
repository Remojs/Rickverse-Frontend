import React from 'react'
import { useState } from 'react'
import validate from '../validation'
import './form.css'
import bportal from './portal.png'
import gportal from './greenPortal.png'

const Form = ({login, isDarkMode}) => {

    let [userData, setUserData] = useState({
        email: '',
        pass: ''
    })

    let [errors, setErrors] = useState({
        email: '',
        pass: ''
    })
 
    let [isLabelHidden, setIsLabelHidden] = useState(false)

    const handleOnChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
        setErrors(validate({...userData, [event.target.name]: event.target.value }))
        if (event.target.value) {
            setIsLabelHidden(true)
        } else {
            setIsLabelHidden(false)
        }
    }

const handleSubmit = (event) => {
    event.preventDefault()
    login(userData)
}


return (
<div className='form-box'>
    <form onSubmit={handleSubmit} className='form'>
    <img src={isDarkMode ? bportal : gportal} alt="" className="form-img" />
    <h1 className='form-title'> Welcome to <span className='form-title-span'> Rick and Morty App</span></h1>
        <div className="form-entries">
            <div className='input-wrapper'>
                <label htmlFor='email' className={`label ${isLabelHidden ? 'hide-label' : ''}`} id='label'> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={isDarkMode ? '#004BBC' : '#ADFF2F'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg> 
                    <span className="span">Ingresa tu email... </span> 
                </label>
                <input className='input' name='email' type='email' id="input" value={userData.email} onChange={handleOnChange} />
            </div>
            {errors.email && <p className='error'> {errors.email} </p>}
            <div className='input-wrapper'>
                <label htmlFor='pass' className={`label ${isLabelHidden ? 'hide-label' : ''}`} id='label'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={isDarkMode ? '#004BBC' : '#ADFF2F'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> 
                    <span className="span">Ingresa tu contraseña... </span> 
                </label>
                <input className='input' name='pass' type='text' id="input" value={userData.pass} onChange={handleOnChange} />
            </div>
            {errors.pass && <p className='error'> {errors.pass} </p>}
            <button className='submit' disabled={!userData.email || !userData.pass || errors.email || errors.pass}> Submit </button>
        </div>
    </form>
</div>
    )
}
export default Form