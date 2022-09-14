import React from 'react';
import cl from "./Hero.css"
const Hero = (props) => {

    let{id,name,status,species,gender,image} = props;

    return (
        <div className={"heroContainer"}>
            <h1>{id}.{name}</h1>
            <h2>{status}</h2>
            <p>{species} - {gender}</p>
            <img src={image}/>
        </div>
    );
};

export default Hero;