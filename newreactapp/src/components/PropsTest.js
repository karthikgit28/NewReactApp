import React from 'react';

function PropsTest(props){
    console.log(props.contact.name);
    return (
        <div>
            <h3 style = {{display : props.contact.name ? "block":"none"}}>Name = {props.contact.name}</h3>
            <p>phone = {props.contact.phone}</p>
            <p>Email = {props.contact.email}</p>
        </div>
    )
}


export default PropsTest;