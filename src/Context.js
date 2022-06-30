import React,{useState} from "react";
import { Posts } from "./Data";

export const DataCTX = React.createContext()
DataCTX.displayName = "DataCTX"

export const DataCTXProvider = (props)=>{

    const [posts , setPosts] = useState([...Posts].sort((a,b)=>b.id-a.id))
    let PostNum = Posts.length + 1
    const [Posttext , setPosttext] = useState("")
    const [Postimg , setPostimag] = useState("")

    let newpost = {
        id:PostNum,
        accountName:"Memo",
        accountImage:"image/img7.jpg",
        accountJop:"Frontend Developer",
        postDate:"12/10/2021",
        postTime:"10:00",
        postText:Posttext,
        postImage:Postimg,
    }

    const [text, setText] = useState()

    const WritePost = (e)=>{
        let Text = e.target.value
        console.log(Text)
        setPosttext(Text)
        setText(Text)
        }

    const Setpostimg = (e)=>{
        let reader = new FileReader()
        reader.onload = ()=>{
            if(reader.readyState === 2){
                setPostimag(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    
    const AttachImg = ()=>{
        let imgattach = document.querySelector("#file")
        imgattach.click()
    }
    
    const Addpost = (e)=>{
        e.preventDefault()
        setPosts([...posts , newpost].sort((a,b)=>b.id-a.id))
        setText("")
    }

    const RemovePost = (e)=>{
        let id = parseInt(e.currentTarget.dataset.id)
        setPosts(posts.filter((post)=>post.id !== id))
    }
    let all = {WritePost , AttachImg , Addpost , Setpostimg , RemovePost, text , posts} 

    return(
        <DataCTX.Provider value={all}>
            {props.children}
        </DataCTX.Provider>
    )
}

/* 
1- creat context filesize.js
2- create export const "context name = React.createContext(default value)"
3- define context display name

create export new const as a function to return context as provider

4- export const context.provider = (props)=>{

       >>> set data state and functions

    return(
        <context name.provider value={data}>
            {props.children}
        </context name.provider>
    )
}

5- in child component import useContext
6- import context file
7- in functional component declare state const CONSTNAME = useContext(CONTEXTNAME)
8- now you can access to data normaly like CONSTNAME.posts or function etc

*/
