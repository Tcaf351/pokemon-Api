import { Link } from 'react-router-dom';

const Pokemon = (props) => {
 const { pokemon } = props;

    return ( 
        <div key={props.index}>
            <h1>{pokemon.name}</h1>
        </div>
     );
}
 
export default Pokemon;