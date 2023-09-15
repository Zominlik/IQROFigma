import React, { memo } from 'react'

const TitleForAbout = ({ aboutTitle, className }) => {
    return (
        <h2 className={className}>
            {aboutTitle}
        </h2>
    )
}

export default memo(TitleForAbout)