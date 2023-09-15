import { memo } from 'react'

const Img = ({ image, ImgageDesc, className }) => {
    return (
        <img src={image} alt={ImgageDesc} className={className} />
    )
}

export default memo(Img)