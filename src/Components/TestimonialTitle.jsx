import React, { memo } from 'react'

const TestimonialTitle = ({ TestimonialTitle }) => {
    return (

        <h3 className='testimonialTitle xs:text-[2.8125rem] xs:font-semibold xs:leading-[3.4375rem]            sm:text-[1.395rem] sm:font-medium sm:leading-[1.7442rem]             md:text-[1.8887rem] md:font-medium md:leading-[2.3609rem]              lg:text-[2.5rem] lg:font-medium lg:leading-[3.125rem]              xl:text-[2.8rem] xl:font-medium xl:leading-[3.4rem]                xxl:text-[3.1rem] xxl:font-medium xxl:leading-[3.8rem]                  '>{TestimonialTitle}</h3>
    )
}

export default memo(TestimonialTitle)