import React from 'react'
import UserInput from './UserInput';
import App from './App'


const UserOutput = (props) => {
    return(
        <div className="useroutput">
            <h3>Hello {props.age}</h3>
            <p>lipsum as it is sometimes known, is dummy text used in laying out 
                print, graphic or web designs. The passage is attributed to an 
                unknown typesetter in the 15th century who is thought to have 
                scrambled parts of Cicero.</p>
        </div>
    )
}
export default UserOutput;