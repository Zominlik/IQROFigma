import { memo, useRef, useState } from 'react'
import AnotherButton from '../AnotherButton';
import TestimonialTitle from './TestimonialTitle';
import TestimonialSubTitle from './TestimonialSubTitle';
import Img from './Img';
import checkIcon from '../assets/Icons/checkedIcon.png';

const Form = ({ label1, label2, ServerPlace, typeInput1, typeInput2, placeholderInput1, placeholderInput2, className }) => {
    const [state, setState] = useState(true)
    const input1Ref = useRef();
    const input2Ref = useRef();

    // const values = {
    //     value1: input1Ref.current.value,
    //     value2: input2Ref.current.value,
    // }
    function handleSubmit(e) {
        e.preventDefault();
        setState(!state)
    }

    return (
        <form action={ServerPlace} onSubmit={handleSubmit} className={className}>
            {state ?
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        {label1}
                    </label>
                    <input ref={input1Ref} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline rounded-xl" id="password" type={typeInput1} placeholder={placeholderInput1} required />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        {label2}
                    </label>
                    <input ref={input2Ref} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline rounded-xl" id="password" type={typeInput2} placeholder={placeholderInput2} required />
                </div> :
                <div className="testimonial_TextsWrapper      xs:px-[1.8581rem] xs:py-[2.5rem] xs:flex xs:flex-col xs:justify-center xs:items-center xs:gap-[2.9375rem]          sm:px-[0rem] sm:py-[0.5rem] sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-[2.9375rem]          md:px-[2rem] md:py-[2.5rem] md:flex md:flex-col md:justify-center md:items-center md:gap-[2.9375rem]                lg:px-[2.2rem] lg:py-[2.8rem] lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-[2.9375rem]          xl:px-[2.5rem] xl:py-[3rem] xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-[2.9375rem]        xxl:px-[2.5rem] xxl:py-[3rem] xxl:flex xxl:flex-col xxl:justify-center xxl:items-center xxl:gap-[2.9375rem]">
                    <Img image={checkIcon} imageDesc='checkIcon' />
                    <TestimonialTitle TestimonialTitle='Cпасибо за вашу заявку!' className='testimonialTitle xs:text-[2.8125rem] xs:font-semibold xs:leading-[3.4375rem]            sm:text-[1.395rem] sm:font-medium sm:leading-[1.7442rem]             md:text-[1.8887rem] md:font-medium md:leading-[2.3609rem]              lg:text-[2.5rem] lg:font-medium lg:leading-[3.125rem]              xl:text-[2.8rem] xl:font-medium xl:leading-[3.4rem]                xxl:text-[3.1rem] xxl:font-medium xxl:leading-[3.8rem]' />
                    <TestimonialSubTitle text='Наш менеджер cкоро свяжется с вами' />
                </div>}
            <AnotherButton btnType='click' className='py-[1.5rem] px-[2.5rem] bg-[#fff] rounded-xl font-[700] text-[#000]'>
                Получить
            </AnotherButton>
        </form>
    )
}

export default memo(Form)