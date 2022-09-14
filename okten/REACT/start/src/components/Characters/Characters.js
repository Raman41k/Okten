import React, {useState} from 'react';
import User from "../user/User";

const Characters = () => {

    let [users,setUsers] = useState([]);

    fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then((data) => {
            setUsers(data.results);
        });

    return (
        <div>
            {users.map(value => <User user={value} key={value.id}/>)}
        </div>
    );
};

export default Characters;