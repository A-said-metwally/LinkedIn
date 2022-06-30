import React, { useState } from "react";
import Mainleftnavbar from './Mainleftnavbar'
import Mainmedcontent from './Mainmedcontent'
import Mainrightnavbar from './Mainrightnavbar'

import "./style.css"

function Maincontent() {
  return (
        <div className="content">
            <div className="m-container">
              <Mainleftnavbar/>
              <Mainmedcontent/>
              <Mainrightnavbar/>
            </div>
        </div>
    );
}

export default Maincontent;
