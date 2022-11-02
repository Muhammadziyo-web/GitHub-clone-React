import { useState } from "react";


function Navbar() {
let [val,setVal]=useState('')
    return (
        <>

            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                {/* Container wrapper */}
                <div className="container-fluid nav">
                    {/* Toggle button */}
                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars " />
                    </button>
                    {/* Collapsible wrapper */}
                    <div className="collapse navbar-collapse left-elements" id="navbarSupportedContent">
                        {/* Navbar brand */}
                        <a className="navbar-brand mt-2 mt-lg-0" href="#">
                            <i class="fa-brands fa-github mobile-none"></i>            </a>
                        {/* Left links */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
                            <li className="nav-item  search">

                                <form onSubmit={(e)=>{
                                    e.preventDefault()
                                    console.log(val);
                                    window.location.href=`https://github.com/search?q=user%3AMuhammadziyo-web+${val}`
                                }}>
                                <input type="text" placeholder="Search or jump to…" 
                                onChange={(e)=>{
                                    setVal(e.target.value)
                                }}                               
                                />
                                </form>

                                <button>/</button>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pull requests</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Issues</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Marketplace</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Explore</a>
                            </li>
                        </ul>
                        {/* Left links */}
                    </div>
                    {/* Collapsible wrapper */}
                    <i class="fa-brands fa-github simple-none"></i>
                    {/* Right elements */}
                    <div className="d-flex align-items-center right-elements">
                        {/* Icon */}
                        <a className="link-secondary me-3" href="https://github.com/notifications">
                            <i class="fa-regular fa-bell"></i>            </a>
                        {/* Notifications */}
                        <div className="dropdown mobile-none">
                            <a className="link-secondary me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-plus"></i>
                                <i class="fa-solid fa-caret-down"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <a className="dropdown-item" href="#">Some news</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Another news</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </li>
                            </ul>
                        </div>
                        {/* <a className=" me-5" href="https://github.com/notifications"> */}
                            {/* <i class="fa-regular fa-bell"></i>            </a> */}
                        {/* Avatar */}
                        <div className="dropdown mobile-none">
                            <a className="dropdown-toggle d-flex align-items-center hidden-arrow acc" href="#" id="navbarDropdownMenuAvatar" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                <img src="https://avatars.githubusercontent.com/u/109217302?v=4" className="rounded-circle" height={25} alt="Black and White Portrait of a Man" loading="lazy" />
                                <i class="fa-solid fa-caret-down"></i>
                                <span></span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                                <li>
                                    <a className="dropdown-item" href="#">My profile</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Settings</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Right elements */}
                </div>
                {/* Container wrapper */}
            </nav>
            {/* Navbar */}


        </>
    );
}

export default Navbar;