import { NavLink } from 'react-router-dom'


function Navs() {
    return ( 
        <div className="nav-repo">

        <ul className="navs div className='wrapper-all'">
     <NavLink to={'/overview'}><li><i class="bi bi-book"></i>Overwiev</li></NavLink>     
     <NavLink to={'/repositories'}><li><i class="fa-solid fa-book"></i>Repositories</li></NavLink>     
     <NavLink to={'/projects'}> <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16zm-9 10H5v6h6v-6zm2 6h6V5h-6v14zM11 5H5v6h6V5z"/></svg>Projects</li> </NavLink>    
     <NavLink to={'/package'}> <li><i class="bi bi-box"></i>Packages</li>    </NavLink> 
     <NavLink to={'/stars'}> <li><i class="fa-regular fa-star"></i>Stars</li>    </NavLink> 
        </ul>

        </div>
     );
}

export default Navs;