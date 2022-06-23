import React from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';
export default function About() {
  const [sparam,setSparam]=useSearchParams();
  const name=sparam.get('maagha');
  return (
    <>
        <Helmet>
          <title>About</title>
        </Helmet>
        <h1>About</h1>
       <button onClick={()=>setSparam({maagha:"shalu"})}>addd</button>
       <button onClick={()=>setSparam({})}>remove</button>
       <h1>content in url is {name}</h1>
    </>
  );
}
