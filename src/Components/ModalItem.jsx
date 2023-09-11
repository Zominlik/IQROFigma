import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import phoneOutgoing from '../assets/Icons/phone-outgoing.svg'
import burgerLogo from '../assets/Logos/burgerLogo.png'


const ModalItem = () => {

    return (
        <ul className="modalItems bg-white hidden static sm:fixed sm:top-0 sm:right-0 sm:fixed xs:top-0 sm:right-0">
            <li className="modalItem">
                <NavLink to='/' className="header_item">
                    <img onClick={(prev) => setToggle(!prev)} className='h-[2.938rem] xs:block sm:h-[2.938rem] md:hidden lg:hidden xl:hidden xxl:hidden' src={burgerLogo} alt="burgerlogo" />
                </NavLink>
            </li>
            <li className="modalItem">
                <NavLink to='/' className="header_item">
                    Услуги
                </NavLink>
            </li>
            <li className="modalItem">
                <NavLink to='/' className="header_item">
                    Как мы работаем
                </NavLink>
            </li>
            <li className="modalItem">
                <NavLink to='/' className="header_item">
                    Результат
                </NavLink>
            </li>
            <li className="modalItem">
                <NavLink to='/' className="header_item">
                    Заказать
                </NavLink>
            </li>
            <li className="modalItem">
                <NavLink to='/' className="header_item">
                    <img src={phoneOutgoing} alt="phone-outgoing-Img" />
                </NavLink>
            </li>
        </ul>
    )
}

export default memo(ModalItem)