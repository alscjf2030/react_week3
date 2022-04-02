import React from "react";
import styled from "styled-components";

import {Text, Input, Grid, Button} from "../elements"

const Login = (props) => {

    return (
        <div>
            <Grid padding={"16px"}>
                <Text size="32px" bold>로그인</Text>
                <Grid padding={"16px 0"}>
                    <Input
                        label="아이디"
                        placeholder="아이디를 입력해주세요"
                        _onChange={() => {
                            console.log("아이디")
                        }}
                    />
                </Grid>
                <Grid padding={"16px 0"}>
                    <Input
                        label="패스워드"
                        placeholder="패스워드를 입력해주세요"
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

export default Login;

