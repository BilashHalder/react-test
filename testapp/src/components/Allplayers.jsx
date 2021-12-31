import { useState, useEffect } from "react";
import Player from "./Player";
import playerList from "../api/data";
export default function Allplayers() {
    
    const [counter,setCounter]=useState(0);
    
    //UseState Hook 
    const [playerlist, setplayerlist] = useState(playerList);
   //Example of Use effect Like a ComponentWillUpdate

    useEffect(()=>{
        document.title=`Counter Value(${counter})`;
        console.log("Use Effect Call....");
        
    });
    var playercat = [...new Set(playerList.map((item) => { return (item.about);}))];







    const filterData = (cat) => { const newdata = playerList.filter((item) => {return item.about === cat; }); setplayerlist(newdata); }
    return (<>
        <div className="btn-group" role="group" aria-label="Basic example">
            {
                playercat.map((item, ind) => { return (<> <button type="button" className="btn btn-secondary" onClick={() => filterData(item)}>{item}</button></>) })
            }
            <button type="button" className="btn btn-secondary" onClick={() => { setplayerlist(playerList) }}>All Players</button>
        </div>
        { playerlist.map((item, index) => {return (<Player info={item} key={index}></Player>) }) }
   
   
   {/* Practice Hook */}
   
   <button className="btn btn-outline-danger" onClick={()=>{
    setCounter(counter+1)   
   }}>Counter Using hook</button>
   
    </>
    )
}
