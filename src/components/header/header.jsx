import { useState } from 'react'
import logo from '../images/beber-agua.png'
import MenuOpen from '../images/menu-outline.svg'
import MenuClose from '../images/close-outline.svg'

export default function Header() {
    
    const [menuBurger, setMenuBurger] = useState(true);


    return (

        <>
        <nav className='flex justify-between items-center bg-[#74ccf4] w-full font-bold text-white'>
            <div>
                <img src={logo} alt="..." className='w-16'/>
            </div>
            <div className={`absolute md:static bg-[#74ccf4] md:min-h-fit min-h-[50vh] left-0 ${menuBurger ? "top-[-100%] transition-all duration-300" : "top-[10%] transition-all duration-300"} md:w-auto w-full flex items-center px-7`}>
                <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8'>
                    <li>
                        <a className='hover:text-gray-500' href="#">Home</a>
                    </li>
                    <li>
                        <a className='hover:text-gray-500' href="#">About Us</a>
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
                {menuBurger ? <img src={MenuOpen} alt='...' className='w-8'/> : <img src={MenuClose} alt='...' className='w-8'/>}
            </div>
            <div className='md:block hidden'></div>
        </nav>
        </>
    )
}