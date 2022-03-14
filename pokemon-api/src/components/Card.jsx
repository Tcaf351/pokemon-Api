

const Card = (props) => {
 const { pokemon } = props;

    return ( 
        <div>
            <img src={pokemon.sprites.front_default} alt="pokemon" className="h-32 w-32" />
            <h1 className="font-semibold text-center uppercase dark:text-gray-50">{pokemon.name}</h1>
        </div>
     );
}
 
export default Card;