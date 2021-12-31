import React from 'react'

export default function ComponentStyle() {
    let styleobj={
        fontSize:'40px',
        color:'orange'
    }
    return (
        <div>
            <h1 style={{
                textAlign:'center',
                color:'blue'
            }}>This is Heading using Inline Style</h1>


            <span style={styleobj}>This is style object</span>
            <h2 className='text-center text-primary'>This is Example of External Css using Class </h2>
        </div>
    )
}
