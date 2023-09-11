import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (

        <ul className="header_items      xs:gap-[1rem] xs:flex xs:flex-col xs:justify-center xs:items-center xs:text-center sm:flex sm:mx-auto sm:justify-center sm:items-center sm:gap-[3.4rem]                     md:flex  md:justify-center md:items-center md:gap-[3.75rem] lg:flex lg:justify-center lg:items-center lg:gap-[5.7rem]        xl:flex xl:justify-center xl:items-center xl:gap-[7rem]       xxl:flex xxl:justify-center xxl:items-center xxl:gap-[7rem]">
            <li className="header_Items">
                <NavLink to='/' className={({ isActive }) => `{header_item rounded-lg ${isActive} ? 'activeStyle' : ''}`}>
                    <span>
                        Услуги
                    </span>
                </NavLink>
            </li>
            <li className="header_Items">
                <NavLink to='/' className={({ isActive }) => `{header_item rounded-lg ${isActive} ? 'activeStyle' : ''}`}>
                    <span>
                        Как мы работаем
                    </span>
                </NavLink>
            </li>
            <li className="header_Items">
                <NavLink to='/' className={({ isActive }) => `{header_item rounded-lg ${isActive} ? 'activeStyle' : ''}`}>
                    <span>
                        Результат
                    </span>
                </NavLink>
            </li>
            <li className="header_Items">
                <NavLink to='/' className={({ isActive }) => `{header_item rounded-lg ${isActive} ? 'activeStyle' : ''}`}>
                    <span>
                        Заказать
                    </span>
                </NavLink>
            </li>
        </ul>
    )
}

export default memo(Navbar)