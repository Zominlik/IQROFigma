import React, { memo } from 'react'

const TitleForAbout = ({ aboutTitle }) => {
    return (
        <h2 className="aboutTitle xs:text-[2.0285rem] xs:font-medium xs:leading-[2.2068rem]              sm:text-[2.2171rem] sm:font-semibold sm:leading-[2.3944rem]         md:text-[1.5171rem] md:font-normal md:leading-[1.6944rem]         lg:text-[1.5171rem] lg:font-normal lg:leading-[1.6944rem]        xl:text-[1.8171rem] xl:font-normal xl:leading-[1.8944rem]          xxl:text-[2.2171rem] xxl:font-semibold xxl:leading-[2.3944rem]">
            {aboutTitle}
        </h2>
    )
}

export default memo(TitleForAbout)