import React, { memo } from 'react'

const TestimonialTitle = ({ TestimonialTitle, className }) => {
    return (
        <h3 className={className}>{TestimonialTitle}</h3>
    )
}

export default memo(TestimonialTitle)