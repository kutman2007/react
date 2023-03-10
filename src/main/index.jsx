import React from "react";
import mainPic from '../images/bg.png'
import css from './Main.module.css'
import { HelpCard } from "../help Card";

export const  MainPage = () =>{
    return <div className={css.MainPage}>
        <div className={css.container}>
            <nav>
            <span>Thrivetalk</span>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Blog</li>
            </ul>
            <button className={css.btn}>CONTACT US</button>
        </nav>
        <div className={css.MainBlock}></div>
        <div>
            <div>
            <div>
                <img className={css.pic} src={mainPic} alt="" />
    
            </div>
               <p>Thrivetalk</p>
               <h1>HELPING YOU THRIVE</h1> 
                <h1>IN ALL AREAS OF LIFE</h1>
               <p>Our highly talented therapists can help you</p>
                 <p> with a range of issues including relationships,</p>
                <p> sex, PTSD, depression, social anxiety, or even </p>
                <p> just caring for yourself more.</p>
            <div>
            <button className={css.who}>WHO AM I</button>
            <button className={css.what}>WHAT DO I DO</button>
            </div>
            </div>
         
        </div>
    </div>
        <div>
             <HelpCard/> 
        {/* <HelpCard/> 
        <HelpCard/>  
        <HelpCard/>  */}
        </div>

        
    </div>

    
}