import * as React from 'react';

const Counter: React.FC<{name: String}> = props =>{
    const {name} = props;
    
    return <p>{name} counter</p>
    
}

export default Counter;