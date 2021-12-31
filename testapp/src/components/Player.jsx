import React from 'react'
const imgstyle={height:'200px'}
export default function Player(props) {
    return (
        <>
        <div className="card col-md-3 p-3 m-2" >
            <img src={props.info.img} className="card-img-top" style={imgstyle}alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center">{props.info.name}</h5>
                <p className="card-text">{props.info.about}</p>
                <p>No Of ODI Played : {props.info.match}</p>
            </div>
        </div>
        </>
    )
}
