import { useState } from 'react'
import logo from '../images/beber-agua.png'
import MenuOpen from '../images/menu-outline.svg'
import MenuClose from '../images/close-outline.svg'
import ToggleTheme from '../ToggleTheme/toggle';

export default function Header() {

    const [menuBurger, setMenuBurger] = useState(true);


    return (
        <nav className='flex justify-between items-center bg-[#74ccf4] dark:bg-slate-600 w-svw font-bold text-white font-fontInter'>
            <div>
                <img src={logo} alt="..." className='w-16 md:w-24 pl-5' />
            </div>
            <div className={`absolute md:static bg-[#74ccf4] md:min-h-fit min-h-[50vh] left-0 ${menuBurger ? "top-[-100%] transition-all duration-300" : "top-[6%] md:top-[12%] transition-all duration-300"} md:w-auto w-full flex items-center px-7 py-5`}>
                <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8'>
                    <li>
                        <a className='hover:text-gray-500' href="/">Home</a>
                    </li>
                    <li>
                        <a className='hover:text-gray-500' href="/about-us">About Us</a>
                    </li>
                    <li>
                        <a className='hover:text-gray-500' href="#">Contact</a>
                    </li>
                    <li>
                        <a className='hover:text-gray-500' href="#">Protein Calculator - Soon...</a>
                    </li>
                </ul>
            </div>
            <div className="cursor-pointer md:hidden pr-12" onClick={() => setMenuBurger((curr) => !curr)}>
                {menuBurger ? <img src={MenuOpen} alt='...' className='w-8' /> : <img src={MenuClose} alt='...' className='w-8' />}
            </div>
            <ToggleTheme />
            <div className='md:block hidden'></div>
        </nav>
    )
}