import React from 'react'

export default function DataSendParent(props) {
    console.log(props)
    return (
        <div>
            <button onClick={()=>props.fun('new child data')}>Send Parent Value</button>
        </div>
    )
}
