import React,{Component} from 'react';


class Fetch extends Component{
    constructor(){
        super();
        this.state = {
            loading : false,
            data : {}
        }
    }

    componentDidMount(){
        this.setState({loading:true});
        fetch("https://swapi.co/api/people/1")
        .then(response => response.json())
        .then(data => {
            this.setState({
                loading:false,
                data : data
            });
        });
    }


    render(){
        const text = this.state.loading ? "Loading..." : this.state.data.name;
        return(
            <div>
                <p>{text}</p>
            </div>
        )
    }
}


export default Fetch;