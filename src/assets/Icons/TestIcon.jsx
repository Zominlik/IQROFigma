import React, { memo } from 'react'

const TestIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width={47} height={47} viewBox="0 0 47 47" fill="none">
        <path d="M21.5417 37.2083C30.1941 37.2083 37.2083 30.1941 37.2083 21.5417C37.2083 12.8892 30.1941 5.875 21.5417 5.875C12.8892 5.875 5.875 12.8892 5.875 21.5417C5.875 30.1941 12.8892 37.2083 21.5417 37.2083Z" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M41.125 41.125L32.6062 32.6063" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.5417 15.6667V27.4167" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.6667 21.5417H27.4167" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
}

export default memo(TestIcon)