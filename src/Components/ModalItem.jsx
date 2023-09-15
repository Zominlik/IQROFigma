import { memo } from 'react'
import phoneOutgoing from '../assets/Icons/phone-outgoing.svg'
import burgerLogo from '../assets/Logos/burgerLogo.png'


const ModalItem = ({ toggle, setToggle }) => {

    return (
        <ul className="modalItems absolute top-0 right-0 select-none rounded bg-gradient-to-br from-gray-200 from-5% via-gray-300 via-30% to-gray-100 to-60%         bg-white sm-w-[20.875rem] sm-h-[52.313rem] text-[#000] p-[3.938rem] flex flex-col items-end gap-[3.125rem]    sm:fixed sm:top-0 sm:right-0 xs:top-0 sm:right-0">
            <img src={burgerLogo} alt="burgerLogo" onClick={() => setToggle(!toggle)} />
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
            <li className="modalItem">
                <a href="tel:+998977386797">
                    <img src={phoneOutgoing} alt="phone-outgoing-Img" className='border border-[#000] rounded-xl' />
                </a>
                <span className='select-none'>Позвонить</span>
            </li>
        </ul>
    )
}

export default memo(ModalItem)