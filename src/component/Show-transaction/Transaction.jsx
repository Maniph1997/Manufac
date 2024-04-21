import React from "react";
import "./trans.css"
import { Link } from "react-router-dom";

const Transaction=()=>{
    return(
        <div>
            <div className="tran"><h1>Transctions Statistics</h1></div>
            <div className="main-container">
                <div className="back"><Link to="/">Back</Link></div>
                <div><h2>Statistics-June</h2></div>
                <div className="container">
                    <ul>
                        <li> Total Sale =   100000</li>
                        <li> Total sold items  = 55</li>
                        <li> Total not sold item = 15</li>
                    </ul>
                </div>
            </div>
            

        </div>
    )
}
export default Transaction;
