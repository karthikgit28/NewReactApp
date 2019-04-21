import React,{Component} from 'react';
import productList from './productsList';
import ClassHeaderObject from './ClassHeaderObject';


class ClassComponentObject extends Component{
    constructor(){
        super();
        this.state = {
            list: productList
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id){
        this.setState(prevState => {
            const updatedList = prevState.list.map(todo =>{
                if(todo.id === id){
                    todo.checked = !todo.checked
                }
                return todo;
            })
            return {
                list : updatedList
            }
        })
    }

    render(){
        const newList = this.state.list.map(item => <ClassHeaderObject key ={item.id} item = {item} 
        handleChange={this.handleChange}/>);
        return(
            <div>{newList}</div>
        )
    }
}

export default ClassComponentObject;