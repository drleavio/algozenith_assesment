"use client"
import uarrow from "../public/images/uarrow.svg"
import darrow from "../public/images/darrow.svg"
import { useState } from "react"
import clsx from "clsx";

interface data{
    video_img:string;
    value:string;
    clock_img:string;
    times:string;
}

interface TaskcardProps {
    heading:string;
    header:string;
    time_img:string;
    times:string;
    dashboard_img:string;
    dash:string;
    copy_img:string;
    value:string;
    completed:string;
    data:data[];
}

 const TaskCard:React.FC<TaskcardProps>=({heading,header,time_img,times,dashboard_img,dash,copy_img,value,completed,data})=>{
    const [click,setClick]=useState(false);
    return <div className="task-card">
        <div className="inside-task-card">
            <div className="headers">
                <div className="head">{heading}</div>
                <div className="header">{header}</div>
            </div>
            <div className="itc-right">
            <div className="inside-itc">
                <img className="img" src={time_img} alt="" />
                <div className="head">{times}</div>
            </div>
            <div className="inside-itc">
                <img className="img" src={dashboard_img} alt="" />
                <div className="head">{dash}</div>
            </div>
            <div className="inside-itc">
                <img className="img" src={copy_img} alt="" />
                <div className="head">{value}</div>
            </div>
            <div className="inside-itc-arrow" onClick={()=>{setClick(!click)}}>
                {
                    click?<img className="img" src={uarrow.src} alt="" />: <img src={darrow.src} alt="" />
                }
            </div>
            </div>
        </div>
        <div className="itc-footer">
            <div className="inside-itc-footer">{completed}% Completed</div>
        </div>
        <div className="progress-bar" >
            <div className="inside-pb" style={{width:`${completed}%`}}></div>
        </div>
        <div className={clsx({
            "show-content":click,
            "hide-content":!click
        })}>
            {
                data.map((opt:data,index:number)=>{
                    return <div key={index} className="inside-sc">
                        <div className="play-section">
                            <img className="img" src={opt.video_img} alt="" />
                            <div className="name">{opt.value}</div>
                        </div>
                        <div className="time-section">
                            <img className="img" src={opt.clock_img} alt="" />
                            <div className="name">{opt.times}</div>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default TaskCard;