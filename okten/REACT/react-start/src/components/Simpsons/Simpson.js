import React from 'react';
import {simpsons} from "./Simpsons"
import cl from "./Simpson.css"
const Simpson = () => {
    return (
        <div>
            {simpsons.map(value =>
                <div className={"simpsonContainer"}>
                    <h1>{value.name} {value.surname}</h1>
                    <h2>Age: {value.age}</h2>
                    <p>{value.info}</p>
                    <img src={value.photo}/>
                </div>
            )}
        </div>
    );
};

export default Simpson;