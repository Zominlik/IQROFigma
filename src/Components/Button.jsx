import React, { memo } from 'react'

const Button = ({ setStateForm, setHandleClickTestimonial, children, btnType, style }) => {
    return (
        <button onClick={(prev) => setHandleClickTestimonial(!prev)} style={style} type={btnType}>{children}</button>
    )
}

export default memo(Button)