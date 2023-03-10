import React from "react";
import qwer from "./cub.module.css"
export const Cub = ({title,bg})=>{
    return(
    <div style={{background:bg}} className={qwer.cub}>
     <hr />
     <h3>{title}</h3>
     <div className={qwer.mom}>
     </div>
     {/* <Sixcub background='blue' name='green'/> */}
    </div>
    )
}