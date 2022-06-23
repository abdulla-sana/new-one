
import './App.css';
import Home from './component/Home.js';
import Contact from './component/Contact.js';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Nav from './component/includes/Nav';
import About from './component/About';
import Nomatch from './component/Nomatch';
import Products from './component/Products';
import Fashion from './component/Fashion';
import Electronics from './component/Electronics';
import Productnav from './component/includes/Productnav';
import Students from './component/Students';
import Studentsview from './component/Studentsview';

function App() {
  return (
    <>
      {/* if you want use Link attribut you must add that attribut inside Router */}
       <Router>
       <Nav/>
         <Routes>
         <Route path='' element={<Home/>} />
         {/* url redirecting to about page used in below usin Navigate cont */}
         {/* using attribut replace or replace=true we can click back button  */}
         {/* <Route path='contact' element={<Navigate replace to='/about'/>} /> */}
         <Route path='contact' element={<Contact/>}/>
         <Route path='about' element={<About/>}/>
         <Route path='students' element={<Students/>} />
         {/* using /: this in after a path which means etering anything in url (host37973:student/maangha) will go to Students component */}
         <Route path='students/:chakka' element={<Studentsview/>} />
         <Route path='products' element={<Productnav/>} >
            {/* below route for show element Productnav and Products for the path 'products' */}
            <Route index element={<Products/>}/>
            <Route path='all' element={<Products/>}/>
            <Route path='fashion' element={<Fashion/>}/>
            <Route path='electronics' element={<Electronics/>}/>
         </Route>
         <Route path='*' element={<Nomatch/>} />
         </Routes>
       </Router>
    </>
  );
}

export default App;
