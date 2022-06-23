import React from 'react';
import {Link,Outlet} from 'react-router-dom';


export default function Productnav() {
  return (
    <>
        <div className='pnav'>
          <ul>
                 <li>
                     <Link to='all'>All</Link>
                 </li>
                 <li>
                     <Link to='fashion'>Fashion</Link>
                 </li>
                 <li>
                   <Link to='electronics'>Electronics</Link>
                 </li>

          </ul>
        </div>
        {/* adding Outlet attribut will display all the liked page(shown in above when click any one) in below because Outlet tag placed below */}
        <Outlet/>
    </>  
  );   
}
