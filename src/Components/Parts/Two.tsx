import React from 'react';
import { Link } from 'react-router-dom';
import One from './One';

class Two extends React.Component{
    render(){
        return (
            <div>
                test_two<br/>
                <Link to='/'>oneへ</Link>
            </div>
        )
    }
}

export default Two;