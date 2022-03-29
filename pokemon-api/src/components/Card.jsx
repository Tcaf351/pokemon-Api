

const Card = ({ id, name, image, type }) => {

    

    return ( 
        <div>
            <img src={image} alt="pokemon" className="h-32 w-32" />
            <h1 className="font-semibold text-center uppercase dark:text-gray-50 transition ease-in-out duration-1000">{name}</h1>
        </div>
     );
}
 
export default Card;