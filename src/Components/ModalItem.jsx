import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import phoneOutgoing from '../assets/Icons/phone-outgoing.svg'
import burgerLogo from '../assets/Logos/burgerLogo.png'


const ModalItem = ({ toggle, setToggle }) => {

    return (
        <ul className="modalItems bg-white sm-w-[20.875rem] sm-h-[52.313rem] text-[#000] p-[3.938rem] flex flex-col items-end gap-[3.125rem]    sm:fixed sm:top-0 sm:right-0 xs:top-0 sm:right-0">
            <li className="modalItem">
                <a href='#services' id='services' onClick={() => setToggle(!toggle)} className="header_item">
                    <img className='h-[2.938rem] xs:block sm:h-[2.938rem]' src={burgerLogo} alt="burgerlogo" />
                </a>
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