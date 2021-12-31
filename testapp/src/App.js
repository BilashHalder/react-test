
import {useState,useEffect} from 'react';
import DataSendParent from './components/DataSendParent';
import PureComponentExample from './components/PureComponentExample';
function App() {
  const [flag,setFlag]=useState(true);
  const[Cdata,setCdata]=useState('')
  function callfromchild(cdata){
console.log(cdata);
setCdata(cdata);
console.log('state data parent '+Cdata)

  }
useEffect(()=>{
  console.log('UseEffect '+Cdata);
})
  return (
   <>
 <div className="container">
 <div className="row mt-5">
<PureComponentExample></PureComponentExample>
 </div>
 </div>
   </>
  );
}

export default App;
