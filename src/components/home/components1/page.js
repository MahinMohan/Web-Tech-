import React from "react";
import Books from "./Books";
import AppBar from "./appbar";
import {useHistory} from 'react-router-dom';

function Page()
{
    return(
        <div className="ui container" >
        <AppBar />
        <div className="ui inverted segment" style={{blockSize:"900px"}}> 
        <Books />
        </div>
        </div>
    );
    };
    
export default Page;