import React,{Component} from 'react';
import FormComponent from './FormComponent';

class Forms extends Component{
    constructor(){
        super();
        this.state = {
            firstName : "",
            lastName : "",
            isFriendly : false,
            gender : "",
            colour : "blue"
        }
        this.handleEvent = this.handleEvent.bind(this);
    }

    // handleEventOtherWay(event){
    //     this.setState({
    //         [event.target.name] : event.target.value
    //     });
    // }


    //Other way to handle event using const
    handleEvent(event){
        const {name,value,type,checked} = event.target;
        type === "checkbox" ?  this.setState({[name] : checked}) : this.setState({[name] : value})
    }

    //If below arrow function used in method no need to bind method in constructor
    // handleEvent =(event) => {
    //     const {name,value,type,checked} = event.target;
    //     type === "checkbox" ?  this.setState({[name] : checked}) : this.setState({[name] : value})
    // }

    render(){
        return(
           <FormComponent 
                handleEvent= {this.handleEvent}
                data = {this.state}
            />
        )
    }
}

export default Forms;