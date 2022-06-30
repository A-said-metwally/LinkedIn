import React,{useState} from "react";
import Header from "./Header";
import Maincontent from "./Maincontent";
import Friendes from "./Friendes";
import MessageBox from './Messagebox'


function Mainpage(){

    const [Content , setContent] = useState("maincontent")

    const Route = (e)=>{
        let pageName = e.currentTarget.dataset.pagename
        setContent(pageName)
    }
    return(
        <div className="mainPage">
            <Header Route={Route} Content={Content} />
            {Content === "maincontent" && <Maincontent/> }
            {Content === "friendes" && <Friendes/> }
            <MessageBox/>
        </div>
    )
}

export default Mainpage