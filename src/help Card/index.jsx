import React from "react";
import s from "../images/d.png"
import style from "./HelpCard.module.css"
import { Cub } from "../cub/cubo";
import { Sixcub } from "../blue/six";
export const HelpCard =() =>{
    return(
 <div className={style.helpCard}>
<h1 className={style.fol}>Why Th
rive?
</h1>
<div className={style.bond}>
<p className={style.more}>
    Want to improve your well-being from the comfort <br />
    of your own couch? Are you having trouble finding <br />
    the right therapist? <span className={style.here}> Here at ThriveTalk, our <br />
    licensed therapists provide the same quality care <br />
     you would get in office from anywhere you can <br />
     access your laptop or mobile phone. <br />
     Become your best self with ThriveTalk.  <br />
    Start therapy now with a licensed therapist!</span></p>
 <img className={style.girl} src={s} alt="" />
 </div>
 <div className={style.white}>
    <div className={style.sdf}>
    <span className={style.about}>ABOUT US</span>
     <h2>
     We want to help you thrive! Whether you are just <br />
     looking for someone to talk to, or are struggling with a  <br />
     mental wellness issue we are here to help.  Our highly <br />
      talented therapists can help you with a range of issues <br />
       including relationships, sex, PTSD, depression, social  <br />
       anxiety, or even just caring for yourself more. <br />
     </h2>
     </div>
     
     <h1 className={style.we}>WE CAN HELP YOU WITH</h1>
     <div className={style.between}>
        <nav>
        <ul>
            <li><Cub  bg="pink" title="Weight Lifting"/></li>
            <li> <Cub bg="#C4E769" title="Running & Spinning"/></li>
            <li> <Cub bg="#62D0DF" title="Pumping Iron"/></li>
            <li> <Cub bg="#0052C1" title="Pumping Iron"/></li>
        </ul>
        </nav>
     <div/>
     </div>
     <div className={style.sixcub}>
     <Sixcub big='#22356F' name='Physical Health'/>
     <Sixcub  big='#0052C1'  name='Mental Health'/>
     <Sixcub name='Nutrition'/>
     </div>
     <div className={style.cubsix}>
     <Sixcub big='#DEE1FF' name='Gymnastics'/>
     <Sixcub big='#62D0DF' name='Crossfit'/>
     <Sixcub big='#8F00FF' name='Aerobics'/>
     </div>
 </div>
 
 </div> 
   
    )
}