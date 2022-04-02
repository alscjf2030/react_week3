import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import {Route, Routes, useNavigate} from "react-router-dom";

import Post from "../components/Post";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

import Header from "../components/Header";
import {Grid} from "../elements"

function App() {
    const navigate = useNavigate();

    return (
        <HeadLine>
            {/*<div>*/}
            {/*    <Home onClick={() => {*/}
            {/*        navigate("/")*/}
            {/*    }}>홈</Home>*/}
            {/*    <Sign>*/}
            {/*        <SignButton onClick={() => {*/}
            {/*            navigate("/signup")*/}
            {/*        }}>회원가입</SignButton>*/}
            {/*        <SignButton onClick={() => {*/}
            {/*            navigate("/login")*/}
            {/*        }}>로그인</SignButton>*/}
            {/*    </Sign>*/}
            {/*</div>*/}
            <div>
                <Grid>
                    <Header></Header>
                    <Routes>
                        <Route path="/" element={<Post/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/signup" element={<SignUp/>}/>
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

const Sign = styled.div`
  margin: 20px 0;
  float: right;
`

const Home = styled.button`
  margin: 20px 0;
  position: relative;
`

const SignButton = styled.button`
  background-color: #61dafb;
  color: #ffffff;
  padding: 5px 20px;
  margin: 0 0 0 15px;
  border: lightblue;
  border-radius: 5px;
`