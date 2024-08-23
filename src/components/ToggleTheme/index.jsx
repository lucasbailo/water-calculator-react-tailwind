import MoonIcon from "../images/sunny-outline.svg"
import SunIcon from "../images/moon-outline.svg"
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
    return <div className="flex absolute items-end justify-end top-2 md:top-6 right-2">
        <img src={MoonIcon} alt="" className="h-6 md:h-7 hidden dark:block cursor-pointer" onClick={toggle} />
        <img src={SunIcon} alt="" className="h-6 md:h-7 block dark:hidden cursor-pointer" onClick={toggle} />
    </div>
}
