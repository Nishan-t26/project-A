import axios from "axios"
import React, { useState } from "react"
const Main=()=>{

   
    const [name,setName]=useState<String>("")
    const [address,setAddress]=useState<String>("")

    const submit=async()=>{
       
 
    }
return(<>
<div className="wrapper">
    <div className="navbar row">
        <div className="col-md-3">first</div>
        <div className="col-md-3">Second</div>
        <div className="col-md-3">Third</div>
        <div className="col-md-3">Forth</div>    
    </div>
    <div className="row inp-data">
        <div className="col-md-4 offset-2">
            <div>
                <label>Name:</label>
            </div>
        </div>
        <div className="col-md-4">
            <div>
                <input 
                onChange={(e)=>{setName(e.target.value)}}
                />
            </div>
        </div>
    </div>
    <div className="row inp-data">
        <div className="col-md-4 offset-2">
            <div>
                <label>Place:</label>
            </div>
        </div>
        <div className="col-md-4">
            <div>
                <input 
                onChange={(e)=>{setAddress(e.target.value)}}
                />
            </div>
        </div>
    </div>
    <div className="row inp-data">
       <div className="col-md-6 offset-3"><button onClick={submit}>Submit</button></div>
    </div>
</div>

   
</>)
}
export default Main