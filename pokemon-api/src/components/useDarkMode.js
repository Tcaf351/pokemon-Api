import { useState, useEffect } from "react";

 
export default function useDarkMode() {
    const [theme, setTheme] = useState('dark');

    const colorTheme = theme === 'dark' ? 'light' : 'dark'

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(colorTheme)

        root.classList.add(theme); // sets the class in dom to dark 
    }, [theme, colorTheme])

    return [colorTheme, setTheme];
};