import FetchPokemon from "../FetchPokemon";
//import PokeWall from "../../assets/PokeWall.jpg";
import "./styles.css";

const PokeWall = require("../../assets/PokeWall.jpg");

const Main = () => {  
    return (
            <>
            <main>
                <div style={{backgroundImage: `url(${PokeWall})`, backgroundRepeat: 'repeat', width: '100%', height: '100%', color: 'black'}}>
                    <h1>POKEMON API</h1>
                    <FetchPokemon />                        
                </div>                  
            </main>
            </>
    )
}

export default Main;

/*
                <div style={{backgroundImage: `url(${PokeWall})`, backgroundRepeat: 'repeat', width: '100%', height: '100%', color: 'black'}}>
                    <h1>POKEMON API</h1>
                    <FetchPokemon />                        
                </div>     
                */