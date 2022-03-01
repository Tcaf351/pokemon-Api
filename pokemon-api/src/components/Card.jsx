

const Card = (props) => {
 const { pokemon } = props;

    return ( 
        <div key={pokemon.name}>
            <h1>{pokemon.name}</h1>
        </div>
     );
}
 
export default Card;