import { Link } from 'react-router-dom';

const Pokemon = (props) => {
 const { pokemon } = props;

    return ( 
        <div>
            <h1 key={pokemon.name}>{pokemon.name}</h1>
        </div>
     );
}
 
export default Pokemon;