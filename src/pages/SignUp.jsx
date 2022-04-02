import React from "react";
import styled from "styled-components";
import {Grid, Text, Input, Button} from "../elements"

const SignUp = (props) => {

    return (
        <>
            <Grid padding="16px">
                <Text size="32px">회원가입</Text>

                <Grid padding="16px 0px">
                    <Input
                        label="아이디"
                        placeholder="아이디를 입력해주세요"
                        _onChange={() => {
                            console.log("아이디")
                        }}
                    />
                </Grid>
                <Grid padding="16px 0px">
                    <Input
                        label="닉네임"
                        placeholder="닉네임을 입력해주세요"
                        _onChange={() => {
                            console.log("닉네임")
                        }}
                    />
                </Grid>
                <Grid padding="16px 0px">
                    <Input
                        label="패스워드"
                        placeholder="패스워드를 입력해주세요"
                        _onChange={() => {
                            console.log("패스워드")
                        }}
                    />
                </Grid>
                <Grid padding="16px 0px">
                    <Input
                        label="패스워드 확인"
                        placeholder="패스워드를 다시 입력해주세요"
                        _onChange={() => {
                            console.log("패스워드 확인")
                        }}
                    />
                </Grid>

                <Button text="회원가입하기"></Button>
            </Grid>
        </>
    )

    // return (
    //     <SignUpBox>
    //         <h1 style={{margin:"30px"}}>회원가입</h1>
    //         <div>
    //             <p>아이디</p>
    //             <Input type="text" placeholder="아이디를 입력해 주세요!"
    //             style={{border: "2px solid #61dafb" , borderRadius: "3px"}} />
    //             <p>닉네임</p>
    //             <Input type="text" placeholder="닉네임을 입력해 주세요!"
    //                    style={{border: "2px solid #61dafb" , borderRadius: "3px"}}/>
    //             <p>패스워드</p>
    //             <Input type="text" placeholder="패스워드를 입력해 주세요!"
    //                    style={{border: "2px solid #61dafb" , borderRadius: "3px"}}/>
    //             <p>패스워드 확인</p>
    //             <Input type="text" placeholder="패스워드를 한번 더 입력해 주세요!"
    //                    style={{border: "2px solid #61dafb" , borderRadius: "3px"}}/>
    //         </div>
    //         <SignUpButton>회원가입</SignUpButton>
    //     </SignUpBox>
    // )
}

SignUp.defaultProps = {}

// const SignUpBox = styled.div`
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
// const SignUpButton = styled.button`
//   margin: 50px 0;
//   padding: 10px;
//   width: 100%;
//   background-color: lightblue;
//   color: #ffffff;
//   position: relative;
//   border: lightblue;
//   border-radius: 5px;
// `

export default SignUp;

