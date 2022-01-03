import React, { Component,PureComponent } from 'react'
//pure componenenot render if state not changed
export default class PureComponentExample extends Component {
    constructor(props){
        super();
        this.state={
            count:0,
        }
    };

   componentDidMount(){
       console.log('mount')
   }
   componentDidUpdate(){
       console.warn('update')
   }
    render() {
        console.log('render');
        return (
            <div>
                <p>State VAlue :{ this.state.count} </p>
                <p>Props VAlue :{this.props.data} </p>
                <button onClick={()=>{
                this.setState({
                    count:this.state.count
                });
                }} >Incre</button>
            </div>
        )
    }
}
