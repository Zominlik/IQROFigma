import React, { memo } from 'react'
import Titles from './Titles'
import TitleForAbout from './TitleForAbout'
import SuccessIconComp from './SuccessIcon'

const About = () => {
    return (
        <section id='about' className='aboutSection '>
            <div className='sm:px-[2rem] px-[4rem] flex flex-col'>
                <Titles heading='Что даст вашему бизнесу внедрение Digital-инструментов' className="servicesTitle text-start py-[4rem]       xs:text-center xs:text-2xl xs:font-semibold xs:leading-[48px]           text-center text-4xl font-extrabold leading-[68px] mb-[1rem]" />
                <div className="aboutCardsBox xs:flex xs:flex-col xs:items-center xs:gap-y-[2rem] xs:m-auto        sm:flex sm:flex-col sm:justify-between sm:items-center sm:gap-y-[3.125rem] sm:mx-auto         md:flex md:justify-center md:items-center md:gap-[2rem] md:mx-auto            lg:flex lg:justify-center lg:items-center lg:gap-[3rem]                 xl:flex xl:justify-center xl:items-center xl:gap-[3rem]       xxl:grid xxl:grid-cols-3 xxl:justify-center xxl:items-center xxl:gap-[6rem] ">
                    <div className="aboutCardsWrapper xs:flex xs:flex-col xs:gap-[2rem]        sm:flex sm:flex-col sm:gap-[3rem]            md:flex md:flex-col md:justify-center md:items-center md:gap-[2rem]           lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-[2rem]               xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-[2rem]            xxl:flex xxl:flex-col xxl:hiddem xxl:justify-center xxl:items-center xxl:gap-[3rem]">
                        <div className="aboutCardBox  xs:p-[2.8125rem] xs:border rounded-3xl xs:border-green-400             sm:min-h-[17.5rem] sm:shadow-md sm:min-w-[18.5rem] sm:p-[4.8125rem] sm:border rounded-3xl sm:border-green-400             md:flex md:border rounded-3xl md:border-green-400                  lg:w-[14.8309rem] lg:h-[10.167rem]           xl:w-[16.8309rem] xl:h-[12.167rem] xl:p-[3rem]            xxl:w-[18.8309rem] xxl:h-[14.167rem] xxl:p-[4rem]              relative rounded-3xl p-[0.9rem] flex justify-center items-center h-[10.188rem]              border rounded-3xl border-green-400">
                            <SuccessIconComp />
                            <TitleForAbout aboutTitle='Автоматизация бизнес-процессов'
                                className="aboutTitle xs:text-[1.5rem] xs:font-medium xs:leading-[2.2068rem]            sm:text-[1.395rem] sm:font-medium sm:leading-[1.7442rem]            md:text-[1.5171rem] md:font-normal md:leading-[1.6944rem]         lg:text-[1.5171rem] lg:font-normal lg:leading-[1.6944rem]        xl:text-[1.8171rem] xl:font-normal xl:leading-[1.8944rem]          xxl:text-[2.2171rem] xxl:font-semibold xxl:leading-[2.3944rem]" />
                        </div>
                        <div className="aboutCardBox  xs:p-[2.8125rem] xs:border rounded-3xl xs:border-green-400             sm:min-h-[17.5rem] sm:shadow-md sm:min-w-[18.5rem] sm:p-[4.8125rem] sm:border rounded-3xl sm:border-green-400             md:flex md:border rounded-3xl md:border-green-400                  lg:w-[14.8309rem] lg:h-[10.167rem]           xl:w-[16.8309rem] xl:h-[12.167rem] xl:p-[3rem]            xxl:w-[18.8309rem] xxl:h-[14.167rem] xxl:p-[4rem]              relative rounded-3xl p-[0.9rem] flex justify-center items-center h-[10.188rem]              border rounded-3xl border-green-400">
                            <SuccessIconComp />
                            <TitleForAbout aboutTitle='Ускорение принятия решений'
                                className="aboutTitle xs:text-[1.5rem] xs:font-medium xs:leading-[2.2068rem]            sm:text-[1.395rem] sm:font-medium sm:leading-[1.7442rem]            md:text-[1.5171rem] md:font-normal md:leading-[1.6944rem]         lg:text-[1.5171rem] lg:font-normal lg:leading-[1.6944rem]        xl:text-[1.8171rem] xl:font-normal xl:leading-[1.8944rem]          xxl:text-[2.2171rem] xxl:font-semibold xxl:leading-[2.3944rem]" />
                        </div>
                    </div>
                    <div className="aboutCardsWrapper xs:flex xs:flex-col xs:gap-[2rem] sm:flex sm:flex-col sm:gap-[3rem]            md:flex md:flex-col md:justify-center md:items-center md:gap-[2rem]           lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-[2rem]               xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-[2rem]            xxl:flex xxl:flex-col xxl:justify-center xxl:items-center xxl:gap-[3rem]">
                        <div className="aboutCardBox  xs:p-[2.8125rem] xs:border rounded-3xl xs:border-green-400             sm:min-h-[17.5rem] sm:shadow-md sm:min-w-[18.5rem] sm:p-[4.8125rem] sm:border rounded-3xl sm:border-green-400             md:flex md:border rounded-3xl md:border-green-400                  lg:w-[14.8309rem] lg:h-[10.167rem]           xl:w-[16.8309rem] xl:h-[12.167rem] xl:p-[3rem]            xxl:w-[18.8309rem] xxl:h-[14.167rem] xxl:p-[4rem]              relative rounded-3xl p-[0.9rem] flex justify-center items-center h-[10.188rem]              border rounded-3xl border-green-400">
                            <SuccessIconComp />
                            <TitleForAbout aboutTitle='Привлечение новых клиентов'
                                className="aboutTitle xs:text-[1.5rem] xs:font-medium xs:leading-[2.2068rem]            sm:text-[1.395rem] sm:font-medium sm:leading-[1.7442rem]            md:text-[1.5171rem] md:font-normal md:leading-[1.6944rem]         lg:text-[1.5171rem] lg:font-normal lg:leading-[1.6944rem]        xl:text-[1.8171rem] xl:font-normal xl:leading-[1.8944rem]          xxl:text-[2.2171rem] xxl:font-semibold xxl:leading-[2.3944rem]" />
                        </div>
                        <div className="aboutCardBox  xs:p-[2.8125rem] xs:border rounded-3xl xs:border-green-400             sm:min-h-[17.5rem] sm:shadow-md sm:min-w-[18.5rem] sm:p-[4.8125rem] sm:border rounded-3xl sm:border-green-400             md:flex md:border rounded-3xl md:border-green-400                  lg:w-[14.8309rem] lg:h-[10.167rem]           xl:w-[16.8309rem] xl:h-[12.167rem] xl:p-[3rem]            xxl:w-[18.8309rem] xxl:h-[14.167rem] xxl:p-[4rem]              relative rounded-3xl p-[0.9rem] flex justify-center items-center h-[10.188rem]              border rounded-3xl border-green-400">
                            <SuccessIconComp />
                            <TitleForAbout aboutTitle='Рост эффективности'
                                className="aboutTitle xs:text-[1.5rem] xs:font-medium xs:leading-[2.2068rem]            sm:text-[1.395rem] sm:font-medium sm:leading-[1.7442rem]            md:text-[1.5171rem] md:font-normal md:leading-[1.6944rem]         lg:text-[1.5171rem] lg:font-normal lg:leading-[1.6944rem]        xl:text-[1.8171rem] xl:font-normal xl:leading-[1.8944rem]          xxl:text-[2.2171rem] xxl:font-semibold xxl:leading-[2.3944rem]" />
                        </div>
                    </div>
                    <div className="aboutCardsWrapper xs:flex xs:flex-col xs:gap-[2rem] sm:flex sm:flex-col sm:gap-[3rem]            md:flex md:flex-col md:justify-center md:items-center md:gap-[2rem]           lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-[2rem]               xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-[2rem]            xxl:flex xxl:flex-col xxl:justify-center xxl:items-center xxl:gap-[3rem]">
                        <div className="aboutCardBox  xs:p-[2.8125rem] xs:border rounded-3xl xs:border-green-400             sm:min-h-[17.5rem] sm:shadow-md sm:min-w-[18.5rem] sm:p-[4.8125rem] sm:border rounded-3xl sm:border-green-400             md:flex md:border rounded-3xl md:border-green-400                  lg:w-[14.8309rem] lg:h-[10.167rem]           xl:w-[16.8309rem] xl:h-[12.167rem] xl:p-[3rem]            xxl:w-[18.8309rem] xxl:h-[14.167rem] xxl:p-[4rem]              relative rounded-3xl p-[0.9rem] flex justify-center items-center h-[10.188rem]              border rounded-3xl border-green-400">
                            <SuccessIconComp />
                            <TitleForAbout aboutTitle='Увеличение прибыли'
                                className="aboutTitle xs:text-[1.5rem] xs:font-medium xs:leading-[2.2068rem]            sm:text-[1.395rem] sm:font-medium sm:leading-[1.7442rem]            md:text-[1.5171rem] md:font-normal md:leading-[1.6944rem]         lg:text-[1.5171rem] lg:font-normal lg:leading-[1.6944rem]        xl:text-[1.8171rem] xl:font-normal xl:leading-[1.8944rem]          xxl:text-[2.2171rem] xxl:font-semibold xxl:leading-[2.3944rem]" />
                        </div>
                        <div className="aboutCardBox  xs:p-[2.8125rem] xs:border rounded-3xl xs:border-green-400             sm:min-h-[17.5rem] sm:shadow-md sm:min-w-[18.5rem] sm:p-[4.8125rem] sm:border rounded-3xl sm:border-green-400             md:flex md:border rounded-3xl md:border-green-400                  lg:w-[14.8309rem] lg:h-[10.167rem]           xl:w-[16.8309rem] xl:h-[12.167rem] xl:p-[3rem]            xxl:w-[18.8309rem] xxl:h-[14.167rem] xxl:p-[4rem]              relative rounded-3xl p-[0.9rem] flex justify-center items-center h-[10.188rem]              border rounded-3xl border-green-400">
                            <SuccessIconComp />
                            <TitleForAbout aboutTitle='Повышение лояльности'
                                className="aboutTitle xs:text-[1.5rem] xs:font-medium xs:leading-[2.2068rem]            sm:text-[1.395rem] sm:font-medium sm:leading-[1.7442rem]            md:text-[1.5171rem] md:font-normal md:leading-[1.6944rem]         lg:text-[1.5171rem] lg:font-normal lg:leading-[1.6944rem]        xl:text-[1.8171rem] xl:font-normal xl:leading-[1.8944rem]          xxl:text-[2.2171rem] xxl:font-semibold xxl:leading-[2.3944rem]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(About)