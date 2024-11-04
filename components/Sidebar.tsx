"use client"

import clsx from "clsx";
import { useState } from "react"
import hamicon from "../public/images/hamicon.svg"
import dashboard from "../public/images/dashboard.svg"
import bulb from "../public/images/bulb.svg"
import people from "../public/images/people.svg"
import board from "../public/images/clipboard.svg"
import rating from "../public/images/rating.svg"
import star from "../public/images/star.svg"
import NavBar from "./NavBar";



export default function Sidebar(){


    const [show,setShow]=useState(true);
    const data=[
        {
            name:"Dashboard",
            image:dashboard.src
        },
        {
            name:"Learn",
            image:bulb.src
        },
        {
            name:"Forums",
            image:people.src
        },
        {
            name:"Upskill",
            image:board.src
        },
        {
            name:"Contest",
            image:rating.src
        },
        {
            name:"Leaderboard",
            image:star.src
        }
    ]
    return <>
     <div className="hamburger" >
        <img onClick={()=>{setShow(!show)}} src={hamicon.src} alt="" />
        <h2>Algozenith</h2>
    </div>
    <div className={clsx({
             "show":show==true,
             "notshow":show==false
        })}>
        <div onClick={()=>{setShow(!show)}} className="x">X</div>
        <div className="parent-mob-nav">
           {
            data.map((val,ind)=>{
                return <div key={ind} className="mob-nav">
                    <div><img src={val.image} alt="" /></div>
                    <div>{val.name}</div>
                </div>
            })
           }
           </div>
    </div>
     <div className="side-container">
       
        <div className="child-container">
            <div className=" header">
                <img src={hamicon.src} alt="" />
                <h2 className="f-r-header">Algozenith</h2>
            </div>
           {
            data.map((val,ind)=>{
                return <NavBar img={val.image} name={val.name} key={ind}/>
            })
           }
        </div>
    </div>
    </>
}

