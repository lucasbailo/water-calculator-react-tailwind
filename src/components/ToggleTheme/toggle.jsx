import MoonIcon from "../images/sunnyIcon.svg"
import SunIcon from "../images/moon.svg"
import { useEffect } from "react"

export default function ToggleTheme() {

    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
    const pageClasses = document.documentElement.classList
    
    useEffect(()=> {
        systemPreference && pageClasses.add('dark')
    })
    
    const toggle = () => {
        pageClasses.toggle('dark')
    }
    return <div className="hidden sm:block">
        <img src={MoonIcon} alt="" className="h-8 text-gray-100 hidden dark:block cursor-pointer" onClick={toggle} />
        <img src={SunIcon} alt="" className="h-8 text-gray-100 block dark:hidden cursor-pointer" onClick={toggle} />
    </div>
}
