// packages
import { Link } from 'react-router-dom';

const Error = () => {
    return ( 
        <div className="flex flex-col justify-center">
                <h1 className="text-2xl font-semibold my-4 text-center">Whoops, you didn't catch them all</h1>
            <div className="flex items-center justify-center">
                <img className="h-80" src="/gottaCatchThemAll.jpeg" alt="pokemon meme" />
            </div>
            <Link to="/" className='bg-indigo-500 px-3 py-1 mx-10 my-3 rounded-lg text-gray-100 hover:bg-indigo-700 transition ease-out duration-200'><button>Go Back</button></Link>
        </div>
     );
}
 
export default Error;