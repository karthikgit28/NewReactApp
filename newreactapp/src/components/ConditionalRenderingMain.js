import React,{Component} from 'react';
import Conditional from './Conditional';

class ConditionalRenderingMain extends Component{
    constructor(){
        super();
        this.state = {
            isLoading : true,
            isLoggedIn : false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoading : false
            })
        },1500)
    }

    handleClick(){
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render(){
        let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN";
        let displayText = this.state.isLoggedIn ? "Logged IN" : "Logged OUT";
        return(
            <div>
                {this.state.isLoading ? <h1>Loading...</h1>
                    : <Conditional />
                }
                <button onClick = {this.handleClick}>{buttonText} </button>
                <h1>{displayText}</h1>
            </div>
        )
    }
}



export default ConditionalRenderingMain;