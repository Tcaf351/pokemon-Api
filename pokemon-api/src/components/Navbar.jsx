import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav>
            <ul>
                <Link to="/allpokemon"><li>Pokemon</li></Link>
                <Link to="/pokemon"><li>Search</li></Link>
            </ul>
        </nav>
     );
}
 
export default Navbar;