import { memo } from 'react'

const Titles = ({ heading, className }) => {
    return (
        <h2 className={className}>{heading}</h2>
    )
}

export default memo(Titles)