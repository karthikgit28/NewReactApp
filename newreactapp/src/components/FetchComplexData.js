import React,{Component} from 'react';

class FetchComplexData extends Component{
    constructor(){
        super();
        this.state = {
            name : []
        }
    }


    componentDidMount(){
        fetch("https://swapi.co/api/people/1")
        .then(response => response.json())
        .then(result => {
            const newName = result.map(item => {
                return item;
            });
            this.setState({
                name : newName
            });
        });
    }

    render(){
        return(
            <div>
                <p>Test</p>
            </div>
        )
    }

}


export default FetchComplexData;