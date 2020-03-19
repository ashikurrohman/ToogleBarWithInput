import React from 'react';



const UserInput = (props) => {
    return(
    <div className="userinput">
        <input type="text" value={props.value} onChange={props.handle} placeholder="write your name"/>  
    </div>
    
    )
}
export default UserInput;