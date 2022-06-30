import React,{useState} from "react";

function Header(Props){

    // const [Value , setValue] = useState(Props.Route)

        
    return(

        <div>
            
            <header>
                <div class="m-container">
                    <div class="nav-bar">
                        <div class="left">
                            <a>إعادة تفعيل حسابPremium</a>
                            <div class="wraper">
                                <i class="fas fa-table"></i>
                                <div>
                                    <i class="fas fa-chevron-down privat"></i>
                                    العمل
                                </div>
                            </div>
                        </div>
                        <div class="mid">
                            <ul>
                                <li class={Props.Content === "me" ? "custom" : null} class="account-logo" data-pagename="me" onClick={Props.Route}>
                                    <img src="image/logo.jpg" alt="account logo"/>
                                    <div >
                                        <i class="fas fa-chevron-down privat"></i>
                                        أنا
                                    </div>
                                </li>
                                <li class={Props.Content === "notifications" ? "custom" : null} data-pagename="notifications" onClick={Props.Route}>
                                    <i class="fas fa-bell"></i>
                                    الاشعارات
                                </li>
                                <li class={Props.Content === "messages" ? "custom" : null} data-pagename="messages" onClick={Props.Route}>
                                    <i class="fas fa-briefcase"></i>
                                    الرسائل
                                </li >
                                <li>
                                    <i class="fas fa-compass"></i>
                                    الوظائف
                                </li>
                                <li class={Props.Content === "friendes" ? "custom" : null} data-pagename="friendes" onClick={Props.Route}>
                                    <i class="fas fa-user-friends"></i>
                                    شبكتى
                                </li>
                                <li class={Props.Content === "maincontent" ? "custom" : null} data-pagename="maincontent" onClick={Props.Route}>
                                    <i class="fas fa-home"></i>
                                    الصفحة الرئيسية
                                </li>
                            </ul>
                        </div>
                        <div class="right">
                            <form action="">
                                <input type="text" name="search" id="search" placeholder="بحث"/>
            
                            </form>
                            <span>in</span>
                        </div>
            
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header