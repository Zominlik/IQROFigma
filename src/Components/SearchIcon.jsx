import React, { memo } from 'react'
import searchIcon from '../assets/Icons/zoom-in.png'


const SearchIcon = () => {
    return (
        <div className='rounded border inline-block rounded-[50%] p-[1rem] border-4  xs:p-[0.7rem]'>
            <img className='xs:max-h-[3.188rem] xs:max-w-[3.188rem] max-h-[5.188rem] max-w-[5.188rem]' src={searchIcon} alt="searchIcon" />
        </div>
    )
}

export default memo(SearchIcon)