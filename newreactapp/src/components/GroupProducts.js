import React from 'react';

function GroupProducts(props){
    console.info(props);
    return(
        <div>
            <h2>{props.products.name}</h2>
            <p>{props.products.email}</p>
        </div>
    )
}



export default GroupProducts;