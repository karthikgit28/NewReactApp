import React from 'react';
import ClassHeaderComponent from './ClassHeaderComponent';

class ClassComponent extends React.Component{
    render(){
        return(
            <div>
                <ClassHeaderComponent username="test" />
            </div>
        )
    }


}



export default ClassComponent;