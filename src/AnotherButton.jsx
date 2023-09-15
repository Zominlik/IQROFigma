import { memo } from 'react'

const AnotherButton = ({ state, setState, children, btnType, className }) => {
    return (
        <button onClick={() => setState(!state)} className={className} type={btnType}>
            {children}
        </button>
    )
}

export default memo(AnotherButton)