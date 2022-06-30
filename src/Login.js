import React from "react";

function Login({changeUser , changePass , Inter , ValidationState ,Userpass, Username}){
    return(
        <div className="login">
            <form >
                <input className="input" value={Username} onChange={changeUser} type="text" name="user" placeholder="ادخل الاسم" required="true"/>
                <input className="input" value={Userpass} onChange={changePass} type="password" placeholder="ادخل الرقم السرى" required="true"/>
                
                <div className="submit">
                    <input type="submit" value="دخول" onClick={Inter}/>
                    <button>نسيت كلمة السر</button>
                </div>

            </form>
            {!ValidationState && <p className="validation">بيانات المستخدم غير صحيحة</p>}
        </div>
    )
}

export default Login