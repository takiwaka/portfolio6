import React from 'react';
import { Link } from 'react-router-dom';
import Two from './Two';

class One extends React.Component{
    render(){
        return (
            <div>
                test_one<br/>
                <Link to='/Two'>twoへ</Link> 
            </div>
        )
    } 
}

export default One;