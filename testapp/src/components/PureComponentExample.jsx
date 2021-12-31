import React, { PureComponent } from 'react'
//Pure Component is checked if state not change then stop the rerendering
export default class PureComponentExample extends PureComponent {
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    render() {
        return (
            <div>
                <p></p>
                <button onClick={}>Click</button>
            </div>
        )
    }
}

