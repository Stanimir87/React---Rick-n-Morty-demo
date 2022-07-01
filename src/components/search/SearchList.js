import SearchItem from "./Searchitem";

const SearchList = (props) => {
    return <ul>
        {props.characters.map((character) =>(
            <SearchItem
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            location={character.location.name}
            img={character.image}
            />
        ))}
    </ul>
}

export default SearchList;