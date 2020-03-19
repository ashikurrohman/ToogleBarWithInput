import React,{Component} from 'react'
import './App.css'
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {
    constructor(props){
        super(props);
       this.state = { 
            name:"",
            personShow:false
         }
    }
    Handeler = (event) =>{
        this.setState({
           name :event.target.value
        })
    }
    ToggoleButton = () =>{
        const doesShow = this.state.personShow 
        this.setState({
            personShow:  !doesShow
        })
    }
    render() { 
        let person = null;
        if(this.state.personShow){
            person =  (
                 <div>
                   <UserOutput age={this.state.name} />
                   <UserOutput age={this.state.name} />
                   <UserOutput age={this.state.name} />
                   
               </div>
              )
            }
        return ( 
            <div className="App">
                 <h1>Hello, React App</h1>
                 <UserInput value={this.state.name} handle={this.Handeler} /> 
                 <button onClick={this.ToggoleButton}>Toogle Data</button>
                {person}
              
            </div>
            
         )
    }
}
export default App;
