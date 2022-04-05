import React from "react";
<<<<<<< HEAD
import { setCookie, deleteCookie } from "../shared/Cookie";
import {Text, Input, Grid, Button} from "../elements"

import {useDispatch} from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user"
import {useNavigate} from "react-router-dom";

const Login = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // const [id, setId] = React.useState('');
    // const [pwd, setPwd] = React.useState('');
    //
    // const changeId = (e) => {
    //     setId(e.target.value);
    // }
    //
    // const changePwd = (e) => {
    //     setPwd(e.target.value);
    // }

    const [id, setId] = React.useState('')
    const [pwd, setPwd] = React.useState('')

    const login = () => {

        if(id ==='' || pwd === ''){
            window.alert('아이디 혹은 비밀번호를 입력해 주세요.')
            return;
        }
        dispatch(userActions.loginFB(id, pwd, navigate))
    }
=======
import styled from "styled-components";

import {Text, Input, Grid, Button} from "../elements"

const Login = (props) => {
>>>>>>> 2f2a128cc50b37a590a8e647f1f2ddd5f22ae66e

    return (
        <div>
            <Grid padding={"16px"}>
                <Text size="32px" bold>로그인</Text>
                <Grid padding={"16px 0"}>
                    <Input
                        label="아이디"
                        placeholder="아이디를 입력해주세요"
<<<<<<< HEAD
                        _onChange={(e) => {
                            setId(e.target.value)
=======
                        _onChange={() => {
                            console.log("아이디")
>>>>>>> 2f2a128cc50b37a590a8e647f1f2ddd5f22ae66e
                        }}
                    />
                </Grid>
                <Grid padding={"16px 0"}>
                    <Input
                        label="패스워드"
                        placeholder="패스워드를 입력해주세요"
<<<<<<< HEAD
                        type='password'
                        _onChange={(e) => {
                            setPwd(e.target.value)
                        }}
                    />
                </Grid>
                <Button text="로그인" _onClick={login}></Button>
            </Grid>
        </div>
    )
}

=======
                        _onChange={() => {
                            console.log("패스워드")
                        }}
                    />
                </Grid>
                <Button text="로그인하기" _onClick={() => {
                    console.log("로그인하기")
                }}></Button>
            </Grid>
        </div>
    )

    // return(
    //     <LoginBox>
    //         <h1 style={{margin:"30px"}}>로그인</h1>
    //         <div>
    //             <p>아이디</p>
    //             <Input type="text" placeholder="아이디를 입력해 주세요!"
    //                    style={{border: "2px solid #61dafb" , borderRadius: "3px"}}/>
    //             <p>패스워드</p>
    //             <Input type="text" placeholder="패스워드를 입력해 주세요!"
    //                    style={{border: "2px solid #61dafb" , borderRadius: "3px"}}/>
    //         </div>
    //         <LoginButton>로그인</LoginButton>
    //     </LoginBox>
    // )
}

// const LoginBox = styled.div`
//   //background-color: slateblue;
//   margin: auto;
//   max-width: 100%;
// `
//
// const Input = styled.input`
//   padding: 10px;
//   width: 100%;
// `
//
// const LoginButton = styled.button`
//   margin: 50px 0;
//   padding: 10px;
//   width: 100%;
//   background-color: lightblue;
//   color: #ffffff;
//   position: relative;
//   border: lightblue;
//   border-radius: 5px;
// `
>>>>>>> 2f2a128cc50b37a590a8e647f1f2ddd5f22ae66e

export default Login;

