import React from "react";
import wer from "./six.cub.module.css"
export const Sixcub = ({name,big})=>{
    return(
    <div style={{background:big}} className={wer.six}>
     <hr />
     <h3>{name}</h3>
     </div>
     )
}