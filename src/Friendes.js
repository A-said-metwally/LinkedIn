import Friendesleft from "./Friendesleft"
import Friendesright from "./Friendesright"



function Friendes(){
    return(
        <div className="content">
            <div className="m-container Friends">
                <Friendesleft/>
                <Friendesright/>
            </div>
       </div>
    )
}

export default Friendes