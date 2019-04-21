import React from 'react';
import PropsTest from './PropsTest';

function Test() {
    const firstName = 'karthik';
    const lastName = 'test';
    const date = new Date();
    const hour = date.getHours();
    let timeOfDay;

    if(hour < 12){

        timeOfDay = "morning";
    }else{
        timeOfDay = "night";
    }

    const styles = {
        color:"#FF8C00",
        backgroundColor:"#FF2008",
        fontSize: 23
    }
    return (   
        <div>
            <h1>Hi {firstName + " " + lastName} Welcome</h1>
            <h1>Other Way {`${firstName} ${lastName}`} Welcome</h1>
            <h1>Time is {date.getHours() % 12} 0'clock </h1>
            <h1>Time of day is {timeOfDay}</h1>
            <p style = {styles}> Paragraphs about myself</p>

            <PropsTest 
                contact = {{name :"New Props Test",
                phone : "9094840327",
                email : "test@qa.com"}}
            />
            <PropsTest 
                contact = {{name : "New Props Two Test",
                phone : "00000000",
                email : "test@qa.com"}}
            />
            <PropsTest 
                contact = {{
                phone : "11111111",
                email : "test@qa.com"}}
            />
        </div>
    )
}

export default Test;