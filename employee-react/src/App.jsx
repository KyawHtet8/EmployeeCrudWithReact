
import { NavLink, Outlet } from 'react-router-dom'
import './App.css'


     function App( ){
      return ((
        <>
       <nav className='navbar navbar-expand-lg navbar-dark bg-dark text-light'>
        <a href="/" className='navbar-brand'>Employee</a>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <NavLink to="/employees" className='nav-link'>Employee</NavLink>
            </li>
            <li className='nav-item'>
              <a href="" className='nav-link'>Contact</a>
            </li>
            <li className='nav-item'>
              <a href="" className='nav-link'>about us</a>
            </li>
          </ul>
        </div>


       </nav>
       <Outlet/>
        </>
      ))
      
     }

export default App
