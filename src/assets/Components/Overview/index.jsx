import repo from '../../repo.json'

function Overview() {
    return (
        <div className="overview">
            <div className="titles">
                <p>Popular repositories</p>
                <p className="pins">Customize your pins</p>
            </div>

            <div className="cards">
                {
                    repo.slice(0,6).map((e, i) => {
                        
                        return <div className="repo">
                                <a href={e.html_url} target='_blank'><b>{e.name}</b></a>
                                <span className="desc">{e?.description}</span>
                                <p><span className="red-dot"> </span>{e.language}</p>
                                <span className="public">Public</span>
                            </div> 


                        
                    })
                }



            </div>


        </div>
    );
}

export default Overview;