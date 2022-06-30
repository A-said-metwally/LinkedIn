import React, {useState} from "react"
import NewPost from "./NewPost"
import PostContainer from "./PostContainer"
import Post from './Post'
import { DataCTX, DataCTXProvider } from "./Context"
import {Posts} from './Data'

function Mainmedcontent(){

    return(
     <div className="main-content">
         <DataCTXProvider>
            <NewPost/>
            <div class="seperate">
                <i class="fas fa-chevron-down" style={{fontSize: "10px",paddingRright: "4px"}}></i>
                <span>التصنيف بحسب <b>الابرز</b></span>
                <div class="line"></div>
            </div>
            <PostContainer/>
         </DataCTXProvider>
            

            
     </div>
    )
}

export default Mainmedcontent