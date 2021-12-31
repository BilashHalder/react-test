import React,{Component}from 'react'

export default class ClassLifeCycle extends Component {
  
    constructor(){
        super();
        this.state={
            name:'test'
        }
       console.log('constructor Called')
    }
    componentDidMount(){
    console.log('componentDidMount Called')
}
componentDidUpdate(){
    console.log('componentDidUpdate Called')   
}
 componentWillUnmount(){
    console.log('component destoyed')  
 }
    render() {
        console.log('Render Called')
        return (
            <div>
                <h1>{this.state.name}</h1>
               <button onClick={()=>{
                   this.setState({name:'rahul'})
               }} >Change State</button>
            </div>
        )
    }
}
