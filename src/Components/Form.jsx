import React, { memo, useRef } from 'react'
import Button from './Button'

const Form = ({ label1, label2, ServerPlace, typeInput1, typeInput2, placeholderInput1, placeholderInput2 }) => {
    const input1Ref = useRef();
    const input2Ref = useRef();

    // const values = {
    //     value1: input1Ref.current.value,
    //     value2: input2Ref.current.value,
    // }
    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <form action={ServerPlace} onSubmit={handleSubmit} className="form xs:flex xs:flex-col xs:justify-center xs:gap-[2.1rem] xs:bg-black xs:rounded-3xl xs:mx-auto xs:px-[1.8581rem] xs:pt-[2.5rem] xs:py-[2.5rem]               sm:flex sm:flex-col sm:justify-center sm:gap-[2.1rem] sm:bg-black sm:rounded-3xl sm:mx-auto sm:px-[1.8581rem] sm:pt-[2.5rem] sm:py-[2.5rem]                  md:flex md:flex-col md:justify-center md:gap-[1.8rem] md:bg-black md:rounded-3xl md:mx-auto md:px-[1.8581rem] md:pt-[2.2rem] md:py-[2.2rem]              lg:flex lg:flex-col lg:justify-center lg:gap-[2.1rem] lg:bg-black lg:rounded-3xl lg:mx-auto lg:px-[1.8581rem] lg:pt-[2.5rem] lg:py-[2.5rem]             xl:flex xl:flex-col xl:justify-center xl:gap-[2.1rem] xl:bg-black xl:rounded-3xl xl:mx-auto xl:px-[1.8581rem] xl:pt-[2.5rem] xl:py-[2.5rem]                xxl:flex xxl:flex-col xxl:justify-center xxl:gap-[2.1rem] xxl:bg-black xxl:rounded-3xl xxl:mx-auto xxl:px-[1.8581rem] xxl:pt-[2.5rem] xxl:py-[2.5rem]">
            <div className="">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    {label1}
                </label>
                <input ref={input1Ref} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline rounded-xl" id="password" type={typeInput1} placeholder={placeholderInput1} />
            </div>
            <div className="">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    {label2}
                </label>
                <input ref={input2Ref} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline rounded-xl" id="password" type={typeInput2} placeholder={placeholderInput2} />
            </div>
            <Button children='Получить' btnType='click' style={{ padding: '1.5rem 2.5rem', backgroundColor: 'white', borderRadius: '2rem', fontWeight: '700', color: 'black' }} />
        </form>
    )
}

export default memo(Form)