import React from 'react';
import cl from "./Character.css"
const Character = (props) => {

    let {character} = props;

    return (
        <div className={"characterContainer"}>
            <h1>{character.id}.{character.name}</h1>
            <h2>{character.status}</h2>
            <p>{character.species} - {character.gender}</p>
            <img src={character.image}/>
        </div>
    );
};

export default Character;