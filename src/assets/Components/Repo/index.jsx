import repos from '../../repo.json'
function Repo() {
    return (
        <>
            <div className="all3 container">
                <div className="inputs">
                    <input type="text" className='search2 ' placeholder='Find repostories ....' />
                    <div className="options">
                        <div class="btn-group">
                            <button
                                type="button"
                                class="btn  dropdown-toggle"
                                data-mdb-toggle="dropdown"
                                data-mdb-display="static"
                                aria-expanded="false"
                            >
                                Type
                            </button>
                            <ul class="dropdown-menu dropdown-menu-lg-end">
                                <li className='d1'><button className='dropdown-item d-flex ' disabled><p> Selelect types</p> <i class="fa-solid fa-xmark text-dark"></i></button> </li>
                                <li className='d1'><button class="dropdown-item" type="button">Public</button></li>
                                <li className='d1'><button class="dropdown-item" type="button">Private action</button></li>
                                <li className='d1'><button class="dropdown-item" type="button">Sources</button></li>
                                <li className='d1'><button class="dropdown-item" type="button">Forks</button></li>
                                <li className='d1'><button class="dropdown-item" type="button">Archived</button></li>
                                <li className='d1'><button class="dropdown-item" type="button">Mirrors</button></li>
                                <li className='d1'><button class="dropdown-item" type="button">Templates</button></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button
                                type="button"
                                class="btn  dropdown-toggle second-btn"
                                data-mdb-toggle="dropdown"
                                data-mdb-display="static"
                                aria-expanded="false"
                            >
                                Language
                            </button>
                            <ul class="dropdown-menu dropdown-menu-lg-end">
                                <li className='d1'><button className='dropdown-item d-flex ' disabled><p> Selelect types</p> <i class="fa-solid fa-xmark"></i></button> </li>
                                <li className='d1'><button class="dropdown-item" type="button">Action</button></li>
                                <li className='d1'><button class="dropdown-item" type="button">Another action</button></li>
                                <li className='d1'><button class="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button
                                type="button"
                                class="btn  dropdown-toggle"
                                data-mdb-toggle="dropdown"
                                data-mdb-display="static"
                                aria-expanded="false"
                            >
                                Sort
                            </button>
                            <ul class="dropdown-menu dropdown-menu-lg-end">
                                <li className='d1'><button className='dropdown-item d-flex ' disabled><p> Selelect types</p> <i class="fa-solid fa-xmark"></i></button> </li>
                                <li className='d1'><button class="dropdown-item" type="button">Action</button></li>
                                <li className='d1'><button class="dropdown-item" type="button">Another action</button></li>
                                <li className='d1'><button class="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                        </div>
                    </div>
                    <button className="add-new"><i class="fa-solid fa-book"></i>New</button>
                </div>
                <div className="cards_rep">

{
    repos.map(e=>{
        return(

                    <div className="card_rep">
                        <div className="tex_sec1">
                            <a href={e.html_url} target={'_blank'}><span className="main-name">{e.name}</span><span className='btn2'>public</span></a>
                            <div className="btnss">
                                <button className="star2 btn">
                                    <i class="fa-regular fa-star text-dark"></i><p>Star</p>
                                </button>
                                <button className='btn'><i class="fa-solid fa-caret-down text-dark"></i></button>
                            </div>
                        </div>
                        
                        <div className="time">
                            <p><span></span>{e.language}</p>
                            <p>Last update {e.updated_at.substring(8,10)}{e.updated_at.substring(4,7)}-{e.updated_at.substring(0,4)}</p>
                        </div>
                    </div>
        )
    })
    
}
    </div>

                


            </div>
        </>
    );
}

export default Repo;