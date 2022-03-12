import { Link } from 'react-router-dom';

const Navbar = () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      
      // Whenever the user explicitly chooses light mode
      localStorage.theme = 'light'
      
      // Whenever the user explicitly chooses dark mode
      localStorage.theme = 'dark'
      
      // Whenever the user explicitly chooses to respect the OS preference
      localStorage.removeItem('theme')



    return ( 
        <nav>
            <ul className='bg-gray-500 flex items-center justify-end py-5 pr-5'>
                <Link to="/"><li className='text-gray-50 mx-1 py-1 px-3 rounded-lg hover:bg-slate-200 hover:text-gray-900 transition duration-300 ease-in-out'>Pokemon</li></Link>
                <Link to="/pokemon"><li className='text-gray-50 mx-1 py-1 px-3 rounded-lg hover:bg-slate-200 hover:text-gray-900 transition duration-300 ease-in-out'>Search</li></Link>
                
                {/* sun start */}
                <a className='mx-1 py-1 px-3'> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                </a>
                {/* sun end */}

                {/* moon start */}
                <a className='mx-1 py-1 px-3'> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                </a>
                {/* moon end */}
            </ul>
        </nav>
     );
}
 
export default Navbar;