import React, { useState } from 'react'
import useStore  from '../store'

const Themeswitch = () => {
    const {theme, setTheme} = useStore((state) => state)
    const [isDarkMode, setIsDarkMode] = useState(theme==="dark")
    const toggleTheme = () => {
        const newTheme= isDarkMode ? "light" : "dark"; 
        setIsDarkMode(!isDarkMode);
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }
  return (
    <div className={`switch ${isDarkMode ? "light" : "dark"} m-3`} onClick={toggleTheme}>
        <div className={`ball ${isDarkMode ? "dark" : "light"}`}>

        </div>

    </div>
  )
}

export default Themeswitch