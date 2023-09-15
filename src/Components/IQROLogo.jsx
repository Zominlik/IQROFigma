import { memo } from 'react'
import iqrologo from '../assets/Logos/IQROLogo.png'

const IQROLogo = () => {
    return (
        <div className='h-[2.938rem] sm:h-[2.938rem]      sm:pl-[rem] sm:pr-[rem] sm:p-[rem]'>
            <img src={iqrologo} alt="iqrologo" />
        </div>
    )
}

export default memo(IQROLogo)