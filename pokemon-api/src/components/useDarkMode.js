import { useState, useEffect } from "react";

 
export default function useDarkMode() {
    const [theme, setTheme] = useState(localStorage.theme);

    const colorTheme = theme === 'dark' ? 'light' : 'dark'

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(colorTheme)

        root.classList.add(theme); // sets the class in dom to dark 
        localStorage.setItem("theme", theme); // sets the theme preference into local storage

    }, [theme, colorTheme])

    return [colorTheme, setTheme];
};