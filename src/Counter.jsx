import { useState } from "react"

export default function Counter(){
    const [count, setcount] =useState(10);
    const evantcount =()=>{
        const newcount = count+1;
        setcount(newcount);
    }
    const removehandler =()=>{
        const rem = count-1;
        setcount(rem);
    }
    return(
        <>
        <div>
           <h3> Counter:{count}</h3> 
           <button onClick={evantcount}>Add</button>
           <button onClick={removehandler}>Remove</button>
        </div>
        </>
    )
}