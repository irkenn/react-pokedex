
function Pokecard({card}){
    console.log('card', card);
    // console.log('props', props);
    return (
        <div className="col-3 " key={card.id}>
            <div className="card my-2">
                <div className="card-title text-center pt-3">
                    <h4>{card.name}</h4>
                </div>
                <div className="card-body py-0">
                        <img className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${card.id}.png`}/>
                    
                    <div className="bottom-info text-center">
                        <p className="mb-0">Type: {card.type}</p>
                        <p>Base experience: {card.base_experience}</p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Pokecard;
