import React,{useState} from "react"
import Messageview from "./Messageview"

function MessageBox(){

    const [Show , setShow] = useState(false)
    const Showhide =()=>{
        setShow(!Show)
    }

    return(
        <div class="messaage">
            <div class="message-top">
                <div class="left">
                    <i class={Show ? "fas fa-chevron-down" : "fas fa-chevron-up"} id="show-message" onClick={Showhide}></i>
                    <i class="far fa-edit"></i>
                    <i class="fas fa-ellipsis-h"></i>
                </div>
                <div class="right">
                    <span>الرسائل</span>
                    <img src="image/logo.jpg" alt="account-logo"/>
                </div>
            </div>
            <Messageview state={Show}/>
        </div>
    )
}

export default MessageBox