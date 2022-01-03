
import {useState,useEffect,useRef} from 'react';
import ApiExample from './components/ApiExample';
import ApiPost from './components/ApiPost';



function App() {
  const [flag,setFlag]=useState(true);
  const[Cdata,setCdata]=useState('');
  let pref=useRef()
  function callfromchild(cdata){
console.log(cdata);
setCdata(cdata);
console.log('state data parent '+Cdata)

  }
  return (
   <>
 <div className="container">
 <div className="row mt-5">
 </div>

 </div>
   </>
  );
}

export default App;
