import { memo } from 'react'

const Button = ({ handleClickTestimonial, setHandleClickTestimonial, children, btnType, className }) => {
    return (
        <button onClick={() => setHandleClickTestimonial(!handleClickTestimonial)} className={className} type={btnType}>
            {children}
        </button>
    )
}

export default memo(Button)