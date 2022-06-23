import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';
export default function Home() {
  const navigate=useNavigate();
  const [param,setParam]=useSearchParams();
  const name=param.get('chakka');
  return (
    <>
        <Helmet>
          <title>Home</title>
       </Helmet>
        <h1>Home page</h1>
        {/* navigate function usef to navigate to specifide component */}
        <h3 onClick={()=>navigate("/contact")}>click me to contact page</h3>
        <button onClick={()=>setParam({chakka:'shalu'})}>add</button>
        <button onClick={()=>setParam()}>remove</button>
        <h1>value in side url is {name}</h1>
    </>
  );
}
