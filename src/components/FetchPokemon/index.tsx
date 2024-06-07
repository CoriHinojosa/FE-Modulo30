import "./styles.css";
import Pokemon from "./Pokemon";
import useAxios from "../../hooks/useAxios";

const FetchPokemon = () => {   
    const { response, loading, error } = useAxios("https://pokeapi.co/api/v2/pokemon/?limit=25");

    return (
        <>
        <h2>LISTA DE POKEMONES DEL 1 AL 25</h2>
        {
            response !== null &&
            (response as { name: any; }[]).map((pokemon: { name: any; }) => {
                const { name } = pokemon;
                return <Pokemon name={name} key={name}/>;
            })
        }
        </>
    )
}

export default FetchPokemon;
