import { useEffect } from "react";
import { useState } from "react"
import "./DisplayUsers.css"

export const DisplayUsers = () =>{
       const [user,setUSer] = useState([]);
        
       useEffect(()=>{
       const data =  fetch("https://randomuser.me/api/").then((res)=>res.json())
        .then(data=>setUSer(data))
       },[])

       

    return(
        <div className="Display-container" >
            <div className="Display-btns"  >
                <button>Fetch Users</button>
                <button>Delete Users</button>
                <button>User Details</button>
            </div>
            <div>
              {user.map(item=>{
                return(
                    <div>
                        {item.results.location}
                    </div>
                )})}
            </div>
        </div>
    )
}