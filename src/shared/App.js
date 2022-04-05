import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import {Route, Routes, useNavigate} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import {history} from "../redux/configureStore";

import Post from "../components/Post";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Header from "../components/Header";
import {Grid} from "../elements"

function App() {
    // const navigate = useNavigate();

    return (
        <HeadLine>
            <div>
                <Grid>
                    <Header></Header>
                    <Routes>
                        <Route path='/' element={<Post/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="signup" element={<SignUp/>}/>
                    </Routes>
                </Grid>
            </div>
            <GlobalStyle/>
        </HeadLine>
    );
}

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`

const HeadLine = styled.div`
  //background-color: green;
  position: relative;
  margin: auto;
  max-width: 1000px;
`