import React, { memo } from 'react'

const TitleForBenefits = ({ headingText }) => {
    return (
        <h2 className="servicesTitle xs:text-[1.275rem] xs:font-normal xs:leading-[1.3rem]       sm:text-[1.875rem]  sm:font-semibold   sm:leading-[2.5rem]                        md:text-[1.175rem]  md:font-normal   md:leading-[1.5rem]                 lg:text-[1.3rem] font-bold leading-[1.83rem] lg:max-w-[17.8813rem]                xl:text-[1.3rem] xl:font-bold xl:leading-[1.83rem]           xxl:text-[1.8rem] xxl:font-bold xxl:leading-[2.2rem]">{headingText}</h2>
    )
}

export default memo(TitleForBenefits)