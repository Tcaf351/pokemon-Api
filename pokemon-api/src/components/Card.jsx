

const Card = ({ id, name, image }) => {

    

    return ( 
        <div>
            <img src={image} alt="pokemon" className="h-32 w-32" />
            <h1 className="xs:text-sm md:text-lg font-semibold text-center uppercase dark:text-gray-50 transition ease-in-out duration-1000">{name}</h1>
        </div>
     );
}
 
export default Card;