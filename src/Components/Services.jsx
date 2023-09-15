import { memo } from 'react'

const Services = ({ titleText, stylesForHero }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden">
            <h3 style={stylesForHero} className="font-bold text-xl mb-2">{titleText}</h3>
        </div>
    )
}

export default memo(Services)