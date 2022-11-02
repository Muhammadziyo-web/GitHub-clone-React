import { useContext } from "react";
import context from '../../Context'

function Followers() {
let followers=useContext(context).getFollowers
console.log(followers);
return (
<div className="followers-page">

    {
    followers.map(e=>{
    return(
    <div className="followers">
        <a className="first-part" href={e.html_url} target={"_blank"}>
            <img src={e.avatar_url} alt="ava" />
            <div className="texts">
                <p><span className="f16 name-p">{e.name||'Muhammadziyo'}</span> <span
                        className="f14">{e.login}</span></p>
                <p className="f12">{e.bio}</p>
                <div className="qoshimcha">

                    <p>
                        <><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                                data-view-component="true" class="octicon octicon-organization">
                                <path fill-rule="evenodd"
                                    d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z">
                                </path>
                            </svg> MV Programming Team</>
                    </p>

                    <p><i class="fa-solid fa-location-dot"></i> California</p>
                </div>
            </div>
        </a>
        <button>Unfollow</button>
    </div>
    )
    })
    }


</div>
);
}

export default Followers;