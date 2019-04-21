import React, {Component} from 'react';


class ClassHeaderComponent extends Component{
    constructor(){
        super();
        this.state = {
            answer : false,
            count : 0
        }
        this.clickEvent = this.clickEvent.bind(this);
    }

    clickEvent(){
        this.setState(prevState => {
            return{
                count : prevState.count + 1
            }
        })
    }

    render(){
        let displayAnswer;
        if(this.state.answer){
            displayAnswer = "yes";
        }else{
            displayAnswer = "No";
        }
        return(
            <div><p>Welcome {this.props.username} with new user? {displayAnswer}</p>
            <h1>{this.state.count}</h1>
                <button onClick = {this.clickEvent}>Click here</button>            
            </div>
        )
    }

}


export default ClassHeaderComponent;