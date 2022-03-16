import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// components
import useDarkMode from './useDarkMode';

const Navbar = () => {

    const [userName, setUserName] = useState(''); // will store value from input text box
    const [name, setName] = useState(() => { // set userName and store it in local storage
            // getting stored value
            const saved = localStorage.getItem("name");
            const initialValue = JSON.parse(saved);
            return initialValue || "";
    }); 
  
    const [colorTheme, setTheme] = useDarkMode();

  
  useEffect(() => {
    // storing input name
    localStorage.setItem("name", JSON.stringify(name));

  }, [name]);



    const handleSubmit = (e) => {
        e.preventDefault()
        setName(userName); // setting the userName into local storage
        setUserName(''); // then resetting the input box to "" while keeping the local storage as the userName
    };

    useDarkMode();

    return ( 
        <nav className='text-gray-50'>

            <ul className='bg-gray-500 flex items-center justify-end py-5 pr-5'>
                <div className='justify-between'>
                    <form onSubmit={handleSubmit}>
                        <label>Enter a username</label>
                        <input type="text"
                                onChange={(e) => setUserName(e.target.value)}
                                value={userName}
                                className="text-gray-900 mx-3 rounded-md"
                                />
                        <button type='submit'>SUBMIT</button>
                    </form>
                </div>

                { !name ? "" : <li>Hello {name}!</li> }

                <Link to="/"><li className='mx-1 py-1 px-3 rounded-lg hover:bg-slate-200 hover:text-gray-900 transition duration-300 ease-in-out'>Pokemon</li></Link>
                <Link to="/pokemon"><li className='mx-1 py-1 px-3 rounded-lg hover:bg-slate-200 hover:text-gray-900 transition duration-300 ease-in-out'>Search</li></Link>
                
                {/* sun start */}
                <span onClick={() => setTheme(colorTheme)}> 
            {  colorTheme === 'light' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ) : (
                
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg> ) }
                </span>
                {/* moon end */}
            </ul>
        </nav>
     );
}
 
export default Navbar;