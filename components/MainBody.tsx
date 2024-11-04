import bell from "../public/images/bell.svg"
import calendar from "../public/images/calendar.svg"
import bag from "../public/images/bag.svg"
import alert from "../public/images/alert.svg"
import clock from "../public/images/clock.svg"
import bclock from "../public/images/bclock.svg"
import dashboard from "../public/images/dashboard.svg"
import copy from "../public/images/copy.svg"
import TaskCard from "./TaskCard"
import play from "../public/images/play.svg"

export default function MainBody(){
    const data=[
        {
            name:"Chapter 1",
            image:clock.src,
            times:"05:00:00"
        },
        {
            name:"Chapter 2",
            image:clock.src,
            times:"05:00:00"
        },
        {
            name:"Chapter 3",
            image:clock.src,
            times:"05:00:00"
        },
        {
            name:"Chapter 4",
            image:clock.src,
            times:"05:00:00"
        },
        {
            name:"Chapter 5",
            image:clock.src,
            times:"05:00:00"
        },
        {
            name:"Chapter 6",
            image:clock.src,
            times:"05:00:00"
        }
    ]
    const videodata=[
        {
            heading:"Part 1",
            header:"Lorem ipsum dolor sit amet",
            time_img:bclock.src,
            times:"02:00:00",
            dashboard_img:dashboard.src,
            dash:"Medium",
            copy_img:copy.src,
            value:"5",
            completed:"5",
            data:[
                {
                    video_img:play.src,
                    value:"Video 1",
                    clock_img:bclock.src,
                    times:"10:00"
                },
                {
                    video_img:play.src,
                    value:"Video 1",
                    clock_img:bclock.src,
                    times:"10:00"
                },
                {
                    video_img:play.src,
                    value:"Video 1",
                    clock_img:bclock.src,
                    times:"10:00"
                },
                {
                    video_img:play.src,
                    value:"Video 1",
                    clock_img:bclock.src,
                    times:"10:00"
                }
            ]
        },
        {
            heading:"Part 2",
            header:"Lorem ipsum dolor sit amet",
            time_img:bclock.src,
            times:"02:00:00",
            dashboard_img:dashboard.src,
            dash:"Medium",
            copy_img:copy.src,
            value:"5",
            completed:"45",
            data:[
                {
                    video_img:play.src,
                    value:"Video 1",
                    clock_img:bclock.src,
                    times:"10:00"
                },
                {
                    video_img:play.src,
                    value:"Video 1",
                    clock_img:bclock.src,
                    times:"10:00"
                },
                {
                    video_img:play.src,
                    value:"Video 1",
                    clock_img:bclock.src,
                    times:"10:00"
                },
                {
                    video_img:play.src,
                    value:"Video 1",
                    clock_img:bclock.src,
                    times:"10:00"
                }
            ]
        },
        {
            heading:"Part 3",
            header:"Lorem ipsum dolor sit amet",
            time_img:bclock.src,
            times:"02:00:00",
            dashboard_img:dashboard.src,
            dash:"Medium",
            copy_img:copy.src,
            value:"5",
            completed:"70",
            data:[
                {
                    video_img:play.src,
                    value:"Video 1",
                    clock_img:bclock.src,
                    times:"10:00"
                },
                {
                    video_img:play.src,
                    value:"Video 1",
                    clock_img:bclock.src,
                    times:"10:00"
                },
                {
                    video_img:play.src,
                    value:"Video 1",
                    clock_img:bclock.src,
                    times:"10:00"
                },
                {
                    video_img:play.src,
                    value:"Video 1",
                    clock_img:bclock.src,
                    times:"10:00"
                }
            ]
        },
        {
            heading:"Part 4",
            header:"Lorem ipsum dolor sit amet",
            time_img:bclock.src,
            times:"02:00:00",
            dashboard_img:dashboard.src,
            dash:"Medium",
            copy_img:copy.src,
            value:"5",
            completed:"25",
            data:[
                {
                    video_img:play.src,
                    value:"Video 1",
                    clock_img:bclock.src,
                    times:"10:00"
                },
                {
                    video_img:play.src,
                    value:"Video 1",
                    clock_img:bclock.src,
                    times:"10:00"
                },
                {
                    video_img:play.src,
                    value:"Video 1",
                    clock_img:bclock.src,
                    times:"10:00"
                },
                {
                    video_img:play.src,
                    value:"Video 1",
                    clock_img:bclock.src,
                    times:"10:00"
                }
            ]
        },
        {
            heading:"Part 5",
            header:"Lorem ipsum dolor sit amet",
            time_img:bclock.src,
            times:"02:00:00",
            dashboard_img:dashboard.src,
            dash:"Medium",
            copy_img:copy.src,
            value:"5",
            completed:"50",
            data:[
                {
                    video_img:play.src,
                    value:"Video 1",
                    clock_img:bclock.src,
                    times:"10:00"
                },
                {
                    video_img:play.src,
                    value:"Video 1",
                    clock_img:bclock.src,
                    times:"10:00"
                },
                {
                    video_img:play.src,
                    value:"Video 1",
                    clock_img:bclock.src,
                    times:"10:00"
                },
                {
                    video_img:play.src,
                    value:"Video 1",
                    clock_img:bclock.src,
                    times:"10:00"
                }
            ]
        },
        {
            heading:"Part 6",
            header:"Lorem ipsum dolor sit amet",
            time_img:bclock.src,
            times:"02:00:00",
            dashboard_img:dashboard.src,
            dash:"Medium",
            copy_img:copy.src,
            value:"5",
            completed:"15",
            data:[
                {
                    video_img:play.src,
                    value:"Video 1",
                    clock_img:bclock.src,
                    times:"10:00"
                },
                {
                    video_img:play.src,
                    value:"Video 1",
                    clock_img:bclock.src,
                    times:"10:00"
                },
                {
                    video_img:play.src,
                    value:"Video 1",
                    clock_img:bclock.src,
                    times:"10:00"
                },
                {
                    video_img:play.src,
                    value:"Video 1",
                    clock_img:bclock.src,
                    times:"10:00"
                }
            ]
        },
        {
            heading:"Part 7",
            header:"Lorem ipsum dolor sit amet",
            time_img:bclock.src,
            times:"02:00:00",
            dashboard_img:dashboard.src,
            dash:"Medium",
            copy_img:copy.src,
            value:"5",
            completed:"85",
            data:[
                {
                    video_img:play.src,
                    value:"Video 1",
                    clock_img:bclock.src,
                    times:"10:00"
                },
                {
                    video_img:play.src,
                    value:"Video 1",
                    clock_img:bclock.src,
                    times:"10:00"
                },
                {
                    video_img:play.src,
                    value:"Video 1",
                    clock_img:bclock.src,
                    times:"10:00"
                },
                {
                    video_img:play.src,
                    value:"Video 1",
                    clock_img:bclock.src,
                    times:"10:00"
                }
            ]
        }
    ]
    return <div className="main-container">
        <div className="upper-body">
            <div className="bell"><img className="inside-img" src={bell.src} alt="" /></div>
            <div className="logo"></div>
        </div>
        <div className="lb-main-body">
           <div className="lower-body">
            <div className="lb-upper">
                <div className="lb-main">
                <img src={calendar.src} alt="" />
                Mentor Sessions
                </div>
                <div className="lb-side-main">
                    <img src={bag.src} alt="" />
                    Learning Material
                </div>
                
            </div>
            <div className="lb-right">
                <img src={alert.src} alt="" />
                How it works
            </div>
           </div>
            <div className="read-content">
                <div className="inside-rc">
                    {
                        data.map((val,ind)=>{
                            return <div key={ind} className="map-data">
                                <h3 className="inside-h3">{val.name}</h3>
                                <img className="md-clock" src={val.image} alt="" />
                                <h3 className="timing">{val.times}</h3>
                            </div>
                        })
                    }
                </div>
                <div className="rc-right">
                    {
                        videodata.map((val,ind)=>{
                            return <TaskCard heading={val.heading} header={val.header} time_img={val.time_img} times={val.times} dashboard_img={val.dashboard_img} dash={val.dash} copy_img={val.copy_img} value={val.value} completed={val.completed} data={val.data} key={ind}/>
                            
                        })
                    }
                    
                </div>
            </div>
        </div>
    </div>
}