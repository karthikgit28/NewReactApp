import React from 'react';

function FormComponent(props){
    return(
        <main>
             <form>
                <input 
                    type = "text"
                    name = "firstName" 
                    value = {props.data.firstName}
                    placeholder = "First Name" 
                    onChange = {props.handleEvent}>
                </input>
                <br/>
                <input 
                    type = "text" 
                    name = "lastName" 
                    value = {props.data.lastName} 
                    placeholder = "Last Name" 
                    onChange = {props.handleEvent}>
                </input>
                <br />

                {/* <textarea>
                    value = {"Some default Text"}
                </textarea> */}

                <label>
                    <input 
                        type = "checkbox" 
                        name = "isFriendly" 
                        checked = {props.data.isFriendly}
                        onChange = {props.handleEvent}
                    />Is Friendly?
                </label>
                <br />

                <label>
                    <input 
                        type = "radio" 
                        name = "gender" 
                        value = "male"
                        checked = {props.data.gender === "male"}
                        onChange = {props.handleEvent}
                    /> Male
                </label>
                <br />
                <label>
                    <input 
                        type = "radio" 
                        name= "gender" 
                        value = "female"
                        checked = {props.data.gender === "female"}
                        onChange = {props.handleEvent}
                    /> Fenale
                </label>
                <br />
                <label>
                    <select 
                        name = "colour" 
                        value = {props.data.colour} 
                        onChange = {props.handleEvent}
                    >
                        <option value = "blue">Blue</option>
                        <option value = "green">Green</option>
                        <option value = "yellow">Yellow</option>
                        <option value = "red">Red</option>
                        <option value = "orange">Orange</option>
                    </select>
                </label>
                <br />

                <h1>{props.data.firstName} {props.data.lastName}</h1>
                <h1>Selected Gender is {props.data.gender}</h1>
                <h1>Selected colour is {props.data.colour}</h1>
            </form>
        </main>
    )
}


export default FormComponent;