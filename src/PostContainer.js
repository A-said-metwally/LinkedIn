import React,{useContext} from "react";
import Post from './Post'

import {DataCTX} from './Context'

function PostContainer(){
    const Data  = useContext(DataCTX)
    return(
        <div>
            {Data.posts.map((D)=>{
                return(
                    <Post {...D} RemovePost={Data.RemovePost}/>
                    
                )
            })}
        </div>
    )
}
export default PostContainer