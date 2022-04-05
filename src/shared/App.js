import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import {Route, Routes, useNavigate} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import {history} from "../redux/configureStore";

import Post from "../components/Post";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Header from "../components/Header";
import {Grid, Button} from "../elements"
import Permit from "./Permit";

import {actionCreators as userActions} from "../redux/modules/user";
import {useDispatch} from "react-redux";
import {apiKey} from "./firebase";

function App() {
    // const navigate = useNavigate();
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
                        <Route path='/' element={<Post/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="signup" element={<SignUp/>}/>
                    </Routes>
                </Grid>
            </div>
            <Permit>
                <Button is_float text='+'></Button>
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