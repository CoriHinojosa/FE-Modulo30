import "./styles.css";

interface PokemonProps {
    name: string;
  }

const Pokemon = ({ name }:PokemonProps) => {
    return (
        <ul>
            <li>・{name}・</li>
        </ul>
    )
}

export default Pokemon;
