import { Link } from 'react-router-dom';

const Card = (props) => {
 const { pokemon } = props;

    return ( 
        <div key={props.index}>
            <h1>{pokemon.name}</h1>
        </div>
     );
}
 
export default Card;