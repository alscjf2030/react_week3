import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import {Route, Routes, useNavigate} from "react-router-dom";

import PostList from "../pages/PostList";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Header from "../components/Header";
import {Grid, Button} from "../elements"
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";
import Permit from "./Permit";
import Search from "./Search";

import {actionCreators as userActions} from "../redux/modules/user";
import {useDispatch} from "react-redux";
import {apiKey} from "./firebase";

function App() {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`
    const is_session = sessionStorage.getItem(_session_key)? true : false

    React.useEffect(() => {

        if(is_session){
            dispatch(userActions.loginCheckFB())
        }
    }, [])


    return (
        <HeadLine>
            <div>
                <Grid>
                    <Header></Header>
                    <Routes>
                        <Route path='/' element={<PostList/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="signup" element={<SignUp/>}/>
                        <Route path='/write' element={<PostWrite/>}/>
                        <Route path='/write/:id' element={<PostWrite/>}/>
                        <Route path='/post/:id' element={<PostDetail/>}/>
                        <Route path='/search' element={<Search/>}/>
                    </Routes>
                </Grid>
            </div>
            <Permit>
                <Button is_float text='+' _onClick={() => {navigate('/write')}}></Button>
            </Permit>
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