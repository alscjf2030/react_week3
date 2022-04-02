import React from "react";
import {Route, Routes} from "react-router-dom";
import styled from "styled-components";

import Post from "../components/Post";

const Main = (props) => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Post/>}/>
            </Routes>
        </div>
    )
}

export default Main;

