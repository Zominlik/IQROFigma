import { memo, useState } from 'react'
import TestimonialSubTitle from './TestimonialSubTitle'
import TestimonialTitle from './TestimonialTitle';
import Form from './Form';
import Button from './Button';

const Testimonial = () => {
    let [handleClickTestimonial, setHandleClickTestimonial] = useState(true);
    return (
        <section id='testimonial' className='testimonialSection pt-[5rem]  px-[2rem]'>
            <div className="wrapperBox xs:border rounded-3xl xs:border-green-400            sm:flex sm:border rounded-3xl sm:border-green-400 sm:px-[2rem]            md:flex md:border rounded-3xl md:border-green-400           lg:flex lg:border rounded-3xl lg:border-green-400           xl:flex xl:border rounded-3xl xl:border-green-400           xxl:flex xxl:border rounded-3xl xxl:border-green-400">
                <div className="testimonial_TextsWrapper      xs:px-[1.8581rem] xs:py-[2.5rem] xs:flex xs:flex-col xs:justify-center xs:items-center xs:gap-[2.9375rem]          sm:px-[1.8581rem] sm:py-[2.5rem] sm:flex sm:flex-col sm:justify-center sm:gap-[2.9375rem]          md:px-[2rem] md:py-[2.5rem] md:flex md:flex-col md:justify-center  md:gap-[2.9375rem]                lg:px-[2.2rem] lg:py-[2.8rem] lg:flex lg:flex-col lg:justify-center lg:gap-[2.9375rem]          xl:px-[2.5rem] xl:py-[3rem] xl:flex xl:flex-col xl:justify-center xl:gap-[2.9375rem]        xxl:px-[2.5rem] xxl:py-[3rem] xxl:flex xxl:flex-col xxl:justify-center xxl:gap-[2.9375rem]">
                    <TestimonialTitle TestimonialTitle='Сколько стоят услуги'
                        className='testimonialTitle xs:text-[2.8125rem] xs:font-semibold xs:leading-[3.4375rem]            sm:text-[1.395rem] sm:font-medium sm:leading-[1.7442rem]             md:text-[1.8887rem] md:font-medium md:leading-[2.3609rem]              lg:text-[2.5rem] lg:font-medium lg:leading-[3.125rem]              xl:text-[2.8rem] xl:font-medium xl:leading-[3.4rem]                xxl:text-[3.1rem] xxl:font-medium xxl:leading-[3.8rem]' />
                    <TestimonialSubTitle text='Цена рассчитывается индивидуально в зависимости отсложности, объема и сроков работы.'
                        className='subTitle xs:text-[1.5625rem] xs:font-medium xs:leading-[2.1875rem]          md:text-[1rem] md:font-medium md:leading-[0.9419rem]            lg:text-[1.1rem] lg:font-medium lg:leading-[1.2749rem]             xl:text-[1.25rem] xl:font-bold xl:leading-[1.6875rem]        xxl:text-[1.3rem] xxl:font-extrabold xxl:leading-[1.8rem] xxl:max-w-[25rem]' />
                    <TestimonialSubTitle text='Разработчик оценивает временные затраты по проекту, а аналитики устанавливают стоимость продукта.'
                        className='subTitle xs:text-[1.5625rem] xs:font-medium xs:leading-[2.1875rem]          md:text-[1rem] md:font-medium md:leading-[0.9419rem]            lg:text-[1.1rem] lg:font-medium lg:leading-[1.2749rem]             xl:text-[1.25rem] xl:font-bold xl:leading-[1.6875rem]        xxl:text-[1.3rem] xxl:font-extrabold xxl:leading-[1.8rem] xxl:max-w-[25rem]' />
                </div>

                {handleClickTestimonial ?
                    <div className="freeAdvice xs:flex xs:flex-col xs:justify-center xs:gap-[2.1rem] xs:bg-black xs:rounded-3xl xs:mx-auto xs:px-[1.8581rem] xs:pt-[2.5rem] xs:py-[2.5rem]               sm:flex sm:flex-col sm:justify-center sm:gap-[2.1rem] sm:bg-black sm:rounded-3xl sm:mx-auto sm:px-[1.8581rem] sm:pt-[2.5rem] sm:py-[2.5rem]                  md:flex md:flex-col md:justify-center md:gap-[1.8rem] md:bg-black md:rounded-3xl md:mx-auto md:px-[1.8581rem] md:pt-[2.2rem] md:py-[2.2rem]              lg:flex lg:flex-col lg:justify-center lg:gap-[2.1rem] lg:bg-black lg:rounded-3xl lg:mx-auto lg:px-[1.8581rem] lg:pt-[2.5rem] lg:py-[2.5rem]             xl:flex xl:flex-col xl:justify-center xl:gap-[2.1rem] xl:bg-black xl:rounded-3xl xl:mx-auto xl:px-[1.8581rem] xl:pt-[2.5rem] xl:py-[2.5rem]                xxl:flex xxl:flex-col xxl:justify-center xxl:gap-[2.1rem] xxl:bg-black xxl:rounded-3xl xxl:mx-auto xxl:px-[1.8581rem] xxl:pt-[2.5rem] xxl:py-[2.5rem]">
                        <TestimonialTitle TestimonialTitle='Получить
                        бесплатную
                        консультацию'
                            className='testimonialTitle xs:text-[2.8125rem] xs:font-semibold xs:leading-[3.4375rem]            sm:text-[1.395rem] sm:font-medium sm:leading-[1.7442rem]             md:text-[1.8887rem] md:font-medium md:leading-[2.3609rem]              lg:text-[2.5rem] lg:font-medium lg:leading-[3.125rem]              xl:text-[2.8rem] xl:font-medium xl:leading-[3.4rem]                xxl:text-[3.1rem] xxl:font-medium xxl:leading-[3.8rem]' />
                        <TestimonialSubTitle text='В рамках консультации уточним необходимую информацию
                        для анализа вашего проекта'
                            className='subTitle xs:text-[1.5625rem] xs:font-medium xs:leading-[2.1875rem]          md:text-[0.6977rem] md:font-semibold md:leading-[0.9419rem]            lg:text-[0.9444rem] lg:font-bold lg:leading-[1.2749rem]             xl:text-[1.25rem] xl:font-bold xl:leading-[1.6875rem]        xxl:text-[1.3rem] xxl:font-extrabold xxl:leading-[1.8rem] xxl:max-w-[25rem]' />
                        <Button setHandleClickTestimonial={() => setHandleClickTestimonial(!handleClickTestimonial)} btnType='click' className='py-[1.5rem] px-[2.5rem] bg-[#fff] rounded-xl font-[700] text-[#000]' >
                            Получить
                        </Button>
                    </div> : <Form className='max-w-[29.875rem]  form xs:flex xs:flex-col xs:justify-center xs:gap-[2.1rem] xs:bg-black xs:rounded-3xl xs:mx-auto xs:px-[1.8581rem] xs:pt-[2.5rem] xs:py-[2.5rem]               sm:flex sm:flex-col sm:justify-center sm:gap-[2.1rem] sm:bg-black sm:rounded-3xl sm:mx-auto sm:px-[1.8581rem] sm:pt-[2.5rem] sm:py-[2.5rem]                  md:flex md:flex-col md:justify-center md:gap-[1.8rem] md:bg-black md:rounded-3xl md:mx-auto md:px-[1.8581rem] md:pt-[2.2rem] md:py-[2.2rem]              lg:flex lg:flex-col lg:justify-center lg:gap-[2.1rem] lg:bg-black lg:rounded-3xl lg:mx-auto lg:px-[1.8581rem] lg:pt-[2.5rem] lg:py-[2.5rem]             xl:flex xl:flex-col xl:justify-center xl:gap-[2.1rem] xl:bg-black xl:rounded-3xl xl:mx-auto xl:px-[1.8581rem] xl:pt-[2.5rem] xl:py-[2.5rem]                xxl:flex xxl:flex-col xxl:justify-center xxl:gap-[2.1rem] xxl:bg-black xxl:rounded-3xl xxl:mx-auto xxl:px-[1.8581rem] xxl:pt-[2.5rem] xxl:py-[2.5rem]' label1='Ваше имя' label2='номер телефона' ServerPlace='https://t.me/BakhodirIbnYashinIbnMansurMRB' typeInput1='text' typeInput2='number' placeholderInput1='Ваше имя' placeholderInput2='номер телефона' />}
            </div>
        </section>
    )
}

export default memo(Testimonial)