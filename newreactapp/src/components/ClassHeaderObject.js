import React from 'react';

function clickAction(){
    console.log("Button clicked");
}


function ClassHeaderObject(props){
    console.info(props);
        return(
            <div>
                <input type = "checkbox" checked = {props.item.checked} 
                onChange={() => props.handleChange(props.item.id)}></input>
                <button onClick={clickAction}>Click me</button>
                <img onMouseOver={() => console.log("Hovered")} src="C:/Users/Karthik/Desktop/pexels-photo-259803.jpeg" alt = "Cat"></img>
                <p>Hi is check box selected with name : {props.item.name}</p>
            </div>
        )
}

export default ClassHeaderObject;