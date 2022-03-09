

const Card = (props) => {
 const { pokemon } = props;

    return ( 
        <div key={pokemon.name} className="text-xl flex items-center justify-center" >
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt="pokemon" />
        </div>
     );
}
 
export default Card;