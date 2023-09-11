import React, { memo } from 'react'

const Titles = ({ heading }) => {
    return (
        <h2 className="servicesTitle text-start       xs:text-center xs:text-2xl xs:font-semibold xs:leading-[48px]           text-center text-4xl font-extrabold leading-[68px] mb-[1rem]">{heading}</h2>
    )
}

export default memo(Titles)