import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (

        <ul className="header_items      xs:gap-[1rem] xs:flex xs:flex-col xs:justify-center xs:items-center xs:text-center sm:flex sm:mx-auto sm:justify-center sm:items-center sm:gap-[3.4rem]                     md:flex  md:justify-center md:items-center md:gap-[3.75rem] lg:flex lg:justify-center lg:items-center lg:gap-[5.7rem]        xl:flex xl:justify-center xl:items-center xl:gap-[7rem]       xxl:flex xxl:justify-center xxl:items-center xxl:gap-[7rem]">
            <li className="header_Items">
                <a href="#Услуги">Услуги</a>
            </li>
            <li className="header_Items">
                <a href="#benefits">Как мы работаем</a>
            </li>
            <li className="header_Items">
                <a href="#about">Результат</a>
            </li>
            <li className="header_Items">
                <a href="#testimonial">Заказать</a>
            </li>
        </ul>
    )
}

export default memo(Navbar)