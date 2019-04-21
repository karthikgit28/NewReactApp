import React from 'react';
import productList from './productsList';
import GroupProducts from './GroupProducts';

function GroupProductsTest(){
    console.info(productList);
    const productComponents = productList.map(item => <GroupProducts key={item.id} products={item}/>);
    return(
        <div>
            {productComponents}
        </div>
    )
}

export default GroupProductsTest;
