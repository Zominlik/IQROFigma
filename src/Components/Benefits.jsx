import React, { memo } from 'react'
import TitleForBenefits from './TitleForBenefits'
import { NavLink } from 'react-router-dom'
import Titles from './Titles'
import SearchIcon from './SearchIcon'

const Benefits = () => {
    return (
        <section className='pt-[2.5rem] flex flex-col justify-center items-center gap-[2rem]'>
            <Titles heading='Как мы работаем'
                className='testimonialTitle xs:text-[2.8125rem] xs:font-semibold xs:leading-[3.4375rem]            sm:text-[1.395rem] sm:font-medium sm:leading-[1.7442rem]             md:text-[1.8887rem] md:font-medium md:leading-[2.3609rem]              lg:text-[2.5rem] lg:font-medium lg:leading-[3.125rem]              xl:text-[2.8rem] xl:font-medium xl:leading-[3.4rem]                xxl:text-[3.1rem] xxl:font-medium xxl:leading-[3.8rem]' />
            <div className='benefitsWrapper          xs:flex xs:flex-col xs:items-center xs:gap-y-[2rem] xs:m-auto        sm:flex sm:flex-col sm:items-center sm:mx-auto          lg:flex lg:flex-col lg:gap-[2rem]             xxl:flex xxl:flex-col xxl:gap-[3rem]'>
                <div className="BenefitsInner flex flex-col p-[1.5rem] items-start        sm:flex sm:flex-col sm:gap-[2rem]           md:grid md:grid-cols-3 md:gap-[1.5rem] md:px-[3rem] md:py-[2rem]  lg:grid lg:grid-cols-3 lg:px-[3rem] lg:gap-[3rem] lg:rounded-2xl            xl:grid xl:grid-cols-3 xl:px-[3rem] xl:gap-[3rem] xl:rounded-2xl               xxl:grid xxl:grid-cols-3 xxl:px-[3rem] xxl:gap-[4rem] xxl:rounded-2xl">
                    <div className="benefitsIntoBox xs:p-[2.8125rem] xs:border rounded-3xl xs:border-green-400             sm:min-h-[17.5rem] sm:shadow-md sm:min-w-[18.5rem] sm:p-[4.8125rem] sm:border rounded-3xl sm:border-green-400 sm:flex sm:items-center sm:gap-[1rem]          md:flex md:items-center md:gap-[1rem] md:border md:p-[1rem] md:rounded-2xl md:border-green-400 md:h-[12rem]                                      lg:border lg:border-green-400 lg:min-h-[11.5099rem] lg:flex lg:items-center lg:gap-[1.5rem] lg:p-[1rem] lg:rounded-2xl              xl:flex xl:gap-[2rem] xl:items-center xl:p-[2rem] rounded-2xl xl:border xl:border-green-400 xl:h-[14rem]           xxl:flex xxl:gap-[2rem] xxl:items-center xxl:p-[2rem] rounded-2xl xxl:border xxl:border-green-400 xxl:h-[14rem]">
                        <NavLink to='/' className={({ isActive }) => `style ${isActive ? 'activeStyle' : ''}`}>
                            <SearchIcon />
                        </NavLink>
                        <TitleForBenefits headingText='Исследование ниши и стратегия развития' />
                    </div>
                    <div className="benefitsIntoBox xs:p-[2.8125rem] xs:border rounded-3xl xs:border-green-400             sm:min-h-[17.5rem] sm:shadow-md sm:min-w-[18.5rem] sm:p-[4.8125rem] sm:border rounded-3xl sm:border-green-400 sm:flex sm:items-center sm:gap-[1rem]          md:flex md:items-center md:gap-[1rem] md:border md:p-[1rem] md:rounded-2xl md:border-green-400 md:h-[12rem]                                      lg:border lg:border-green-400 lg:min-h-[11.5099rem] lg:flex lg:items-center lg:gap-[1.5rem] lg:p-[1rem] lg:rounded-2xl              xl:flex xl:gap-[2rem] xl:items-center xl:p-[2rem] rounded-2xl xl:border xl:border-green-400 xl:h-[14rem]           xxl:flex xxl:gap-[2rem] xxl:items-center xxl:p-[2rem] rounded-2xl xxl:border xxl:border-green-400 xxl:h-[14rem]">
                        <NavLink to='/' className={({ isActive }) => `style ${isActive ? 'activeStyle' : ''}`}>
                            <SearchIcon />
                        </NavLink>
                        <TitleForBenefits headingText='Анализ конкурентов и юзабилити тесты' />
                    </div>
                    <div className="benefitsIntoBox xs:p-[2.8125rem] xs:border rounded-3xl xs:border-green-400             sm:min-h-[17.5rem] sm:shadow-md sm:min-w-[18.5rem] sm:p-[4.8125rem] sm:border rounded-3xl sm:border-green-400 sm:flex sm:items-center sm:gap-[1rem]          md:flex md:items-center md:gap-[1rem] md:border md:p-[1rem] md:rounded-2xl md:border-green-400 md:h-[12rem]                                      lg:border lg:border-green-400 lg:min-h-[11.5099rem] lg:flex lg:items-center lg:gap-[1.5rem] lg:p-[1rem] lg:rounded-2xl              xl:flex xl:gap-[2rem] xl:items-center xl:p-[2rem] rounded-2xl xl:border xl:border-green-400 xl:h-[14rem]           xxl:flex xxl:gap-[2rem] xxl:items-center xxl:p-[2rem] rounded-2xl xxl:border xxl:border-green-400 xxl:h-[14rem]">
                        <NavLink to='/' className={({ isActive }) => `style ${isActive ? 'activeStyle' : ''}`}>
                            <SearchIcon />
                        </NavLink>
                        <TitleForBenefits headingText='Семантическая структура и оптимизация' />
                    </div>
                </div>
                <div className="BenefitsInnerBox flex flex-col p-[1.5rem] items-start        sm:flex sm:flex-col sm:gap-[2rem]           md:grid md:grid-cols-3 md:gap-[1.5rem] md:px-[3rem] md:py-[2rem]  lg:grid lg:grid-cols-3 lg:px-[3rem] lg:gap-[3rem] lg:rounded-2xl            xl:grid xl:grid-cols-3 xl:px-[3rem] xl:gap-[3rem] xl:rounded-2xl               xxl:grid xxl:grid-cols-3 xxl:px-[3rem] xxl:gap-[4rem] xxl:rounded-2xl">
                    <div className="benefitsIntoBox xs:p-[2.8125rem] xs:border rounded-3xl xs:border-green-400             sm:min-h-[17.5rem] sm:shadow-md sm:min-w-[18.5rem] sm:p-[4.8125rem] sm:border rounded-3xl sm:border-green-400 sm:flex sm:items-center sm:gap-[1rem]          md:flex md:items-center md:gap-[1rem] md:border md:p-[1rem] md:rounded-2xl md:border-green-400 md:h-[12rem]                                       lg:border lg:border-green-400 lg:min-h-[11.5099rem] lg:flex lg:items-center lg:gap-[1.5rem] lg:p-[1rem] lg:rounded-2xl              xl:flex xl:gap-[2rem] xl:items-center xl:p-[2rem] rounded-2xl xl:border xl:border-green-400 xl:h-[14rem]           xxl:flex xxl:gap-[2rem] xxl:items-center xxl:p-[2rem] rounded-2xl xxl:border xxl:border-green-400 xxl:h-[14rem]">
                        <NavLink to='/' className={({ isActive }) => `style ${isActive ? 'activeStyle' : ''}`}>
                            <SearchIcon />
                        </NavLink>
                        <TitleForBenefits headingText='Прототипирование UI | UX дизайна для продукта' />
                    </div>
                    <div className="benefitsIntoBox xs:p-[2.8125rem] xs:border rounded-3xl xs:border-green-400 xs:w-full            sm:min-h-[17.5rem] sm:shadow-md sm:min-w-[18.5rem] sm:p-[4.8125rem] sm:border rounded-3xl sm:border-green-400 sm:flex sm:items-center sm:gap-[1rem] sm:w-full          md:flex md:items-center md:gap-[1rem] md:border md:p-[1rem] md:rounded-2xl md:border-green-400 md:h-[12rem]                                        lg:border lg:border-green-400 lg:min-h-[11.5099rem] lg:flex lg:items-center lg:gap-[1.5rem] lg:p-[1rem] lg:rounded-2xl              xl:flex xl:gap-[2rem] xl:items-center xl:p-[2rem] rounded-2xl xl:border xl:border-green-400 xl:h-[14rem]           xxl:flex xxl:gap-[2rem] xxl:items-center xxl:p-[2rem] rounded-2xl xxl:border xxl:border-green-400 xxl:h-[14rem]">
                        <NavLink to='/' className={({ isActive }) => `style ${isActive ? 'activeStyle' : ''}`}>
                            <SearchIcon />
                        </NavLink>
                        <TitleForBenefits headingText='Разработка и верстка' />
                    </div>
                    <div className="benefitsIntoBox xs:p-[2.8125rem] xs:border rounded-3xl xs:border-green-400             sm:min-h-[17.5rem] sm:shadow-md sm:min-w-[18.5rem] sm:p-[4.8125rem] sm:border rounded-3xl sm:border-green-400 sm:flex sm:items-center sm:gap-[1rem]          md:flex md:items-center md:gap-[1rem] md:border md:p-[1rem] md:rounded-2xl md:border-green-400 md:h-[12rem]                                       lg:border lg:border-green-400 lg:min-h-[11.5099rem] lg:flex lg:items-center lg:gap-[1.5rem] lg:p-[1rem] lg:rounded-2xl              xl:flex xl:gap-[2rem] xl:items-center xl:p-[2rem] rounded-2xl xl:border xl:border-green-400 xl:h-[14rem]           xxl:flex xxl:gap-[2rem] xxl:items-center xxl:p-[2rem] rounded-2xl xxl:border xxl:border-green-400 xxl:h-[14rem]">
                        <NavLink to='/' className={({ isActive }) => `style ${isActive ? 'activeStyle' : ''}`}>
                            <SearchIcon />
                        </NavLink>
                        <TitleForBenefits headingText='Финальное тестирование и запуск продукта' />
                    </div>
                </div>




                {/* <TestIcon />
            <OptimizeIcon />
            <PrototypeDesignIcon />
            <RazrabotkaVerstkaIcon />
            <FinalTestIcon /> */}
            </div>
        </section >
    )
}

export default memo(Benefits)