import React, { memo } from 'react'
import SuccessIcon from '../assets/img/SuccessIcon.png'
const SuccessIconComp = () => {
    return (
        <img className='absolute left-0 top-0' src={SuccessIcon} alt="SuccessIcon" />
    )
}

export default memo(SuccessIconComp)