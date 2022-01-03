import React, { Component,createRef } from 'react'
//Ref is used to manipulate dom elements
export default class ExampleRef extends Component {
    constructor(){
        super();
        this.inputRef=createRef();
    }

    componentDidMount(){
        console.warn(this.inputRef.current.value="1");
        this.inputRef.current.style.color="blue";
        this.inputRef.current.style.border="1px dotted red";
    }
    render() {
        return (
            <div>
               <input type="text" ref={this.inputRef} ></input> 
            </div>
        )
    }
}
