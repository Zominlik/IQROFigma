import React, { memo } from 'react'
import Button from './Button'
import Titles from './Titles'
import TitleForAbout from './TitleForAbout'
import HeroImg from '../assets/img/Phone_Images.png'
import HeroImg1 from '../assets/img/Phone_Images1.png'




const HeroSection = () => {
    return (
        <>
            <article className=' relative  w-full'>
                <div className="heroWrapper          xs:flex xs:flex-col xs:items-center xs:gap-[18rem]          sm:flex sm:flex-col sm:items-center sm:gap-[24rem]           md:flex md:flex-col md:gap-[3rem] md:px-[2rem] md:py-[5rem]                   lg:flex lg:flex-col lg:gap-[3rem] lg:px-[3rem] lg:py-[5rem]                      xl:flex xl:flex-col xl:gap-[5rem] xl:py-[5rem]          xxl:flex xxl:flex-col  xxl:gap-[5.25rem] xxl:pt-[4.4375rem] xxl:pb-[15.375rem] max-w-[53.5625rem]">
                    <div className="heroTextWrapper        sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-[3rem] sm:max-w-[33rem] sm:px-[4rem]         md:flex md:flex-col md:gap-[3rem] md:max-w-[23rem]           lg:flex lg:flex-col lg:gap-[3rem] lg:max-w-[33rem]          xl:flex xl:flex-col xl:gap-[2rem] xl:max-w-[33rem]">
                        <Titles heading='Разаработка сайтов и мобильных приложений' />
                        <TitleForAbout aboutTitle='Помогаем бизнесу увеличить прибыль с помощью digital-инструментов' />
                    </div>
                    <div className="btnBox">
                        <Button btnType='submit' style={{ background: '#fff', color: 'black', padding: '1.5rem 2.5rem', backgroundColor: 'white', borderRadius: '2rem', fontWeight: '700', }}>
                            Обсудить проект
                        </Button>
                    </div>
                    <div className="ImgBox absolute          xs:flex xs:left-[2rem] xs:top-[18rem] xs:max-w-[8rem]            sm:flex sm:left-[10rem] sm:top-[30rem] sm:max-w-[10rem]         md:flex md:left-[28rem] md:top-[9rem] md:max-w-[10rem]           lg:flex lg:left-[38rem] lg:top-[5rem] lg:max-w-[13rem]         xl:flex xl:right-0 xl:top-[8rem]          xxl:flex right-0 top-[8rem]">
                        <img src={HeroImg} alt="HeroImg1 " />
                        <img src={HeroImg1} alt="HeroImg1 " />
                    </div>
                </div>
                {/* <div className="btnWrapper order-last row-span-2">
                </div> */}
                {/* <div className='phoneImgWrapper flex row-span-3'>
                    <div className='mx-[-60px]'>
                        <img src={Phone_Images} alt="Phone_Images" />
                    </div>
                    <div className='my-[+20px] z-10'>
                        <img src={Phone_1} alt="Phone_1" />
                    </div>
                </div> */}
            </article >
        </>
    )
}

export default memo(HeroSection)