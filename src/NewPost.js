import React from "react"
import {DataCTX} from './Context'

function NewPost(){
    return(
        <DataCTX.Consumer>
            {(value)=>{
                return(
                    <div class="add-post">
                        <div class="post">
                            <div class="input">
                                <form action="" onSubmit={value.Addpost}>
                                    <input type="text" value={value.text} onChange={value.WritePost} name="addPost" id="addPost" placeholder="بدء منشور"/>
                                </form>
                            </div>
                            <img src="image/logo.jpg" alt="account-logo"/>
                        </div>
                        <div class="attach">
                            <div onClick={value.Addpost}><i class="fas fa-paper-plane" style={{color:"green", fontSize: "18px"}}></i>نشر</div>
                            <div><i class="fas fa-flag-checkered" style={{color:"red", fontSize: "18px"}}></i>المناسبة</div>
                            <div><i class="fas fa-compass" style={{color:"yellow", fontSize: "18px"}}></i>فيديو</div>
                            <div onClick={value.AttachImg}><input id="file" type="file" onChange={value.Setpostimg} /> <i class="fas fa-compass" style={{color:"blue", fontSize: "18px"}}></i>صورة</div>
                        </div>
                    </div>
                     )
            }}
        </DataCTX.Consumer>
)
}

export default NewPost