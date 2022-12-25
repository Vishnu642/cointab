import { useEffect } from "react";
import { useState } from "react"
import "./DisplayUsers.css"

export const DisplayUsers = () =>{
       const [user,setUSer] = useState(["madhu", "sankar"]);
       
        
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
            <div className="displayname" >
               <div>Adam</div>
               <div>Grace</div>
               <div>Delphin</div>
               <div>Scarlet</div>
               <div>Jhonson</div>
               <div>Drake</div>
               <div>Chris</div>
               <div>Mathew</div>
            </div>
        </div>
    )
}