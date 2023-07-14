import Array from "./Array";
import Pokecard from "./Pokecard";

function Pokedex(){
    console.log('Array', Array);
    return(
       //In here I will render an array  
        <>
            { Array.map(card =>< Pokecard card={card}/> )}
        </>
        

    );
};

export default Pokedex;

{/* {Array.map(card => <p>{card.name}</p>)} */}