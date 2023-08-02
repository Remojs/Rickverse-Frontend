import React from 'react'
import './allcharacters.css'

const Pagination = ({prev, next, onPrevious, onNext}) => {
    return (
        <div className='pagination-btnbox'>
                { next && <button className='pagination-btn' onClick={onNext}> Next <span className="btn-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg> </span> </button> }
                { prev && <button className='pagination-btn' onClick={onPrevious}> <span className="btn-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg> </span> Prev </button> }
        </div>
    )
}

export default Pagination