import React from 'react';
import cl from './User.css'

const User = (props) => {

    let {user} = props;

    return (
        <div className={'userContainer'}>
            <h1>{user.id}.{user.name}</h1>
            <h2>{user.status}</h2>
            <p>{user.species} - {user.gender}</p>
            <img src={user.image}/>
        </div>
    );
};

export default User;