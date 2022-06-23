import React from 'react';
import { Link } from 'react-router-dom';

export default function Students() {
    const student=[
        {id:1,name:'shalu',},
        {id:2,name:'salman',},
        {id:3,name:'kunhol',},
        {id:4,name:'rinu',},
        
    ];
  return (
    <>

        <div>
            {student.map((i)=>
            (
               <>
                 <h1>{i.name}</h1>
                 <Link to={`${i.id}`}>click</Link>
               </> 
             ))}

        </div>
    </>
  );
}
