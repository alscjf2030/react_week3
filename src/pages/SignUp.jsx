import React, {useState} from "react";
import {Grid, Text, Input, Button} from "../elements"

import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user";
import {emailCheck} from "../shared/common";

const SignUp = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [id, setId] = React.useState('')
    const [pwd, setPwd] = React.useState('')
    const [pwd_check, setPwdCheck] = React.useState('')
    const [user_name, setUserName] = React.useState('')

    const signup = () => {

        let _reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z]*)@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/
        console.log(_reg.test(id));

        if(id === '' || pwd ==='' || user_name === ''){
            window.alert('아이디, 패스워드, 닉네임을 모두 입력해 주세요.')
            return;
        }

        if(!emailCheck(id)){
            window.alert('이메일 형식이 맞지 않습니다.')
            return;
        }

        if(pwd !== pwd_check){
            window.alert('패스워드를 확인해 주세요.')
            return;
        }

        if(pwd.length < 6){
            window.alert("패스워드가 짧습니다.")
            return;
        }

        dispatch(userActions.signupFB(id, pwd, user_name, navigate))

        return window.alert("회원가입을 축하드립니다.");
    }

    return (
        <>
            <Grid padding="16px">
                <Text size="32px">회원가입</Text>

                <Grid padding="16px 0px">
                    <Input
                        label="아이디"
                        placeholder="아이디를 입력해주세요"
                        _onChange={(e) => {
                            setId(e.target.value)
                        }}
                    />
                </Grid>
                <Grid padding="16px 0px">
                    <Input
                        label="닉네임"
                        placeholder="닉네임을 입력해주세요"
                        _onChange={(e) => {
                            setUserName(e.target.value)
                        }}
                    />
                </Grid>
                <Grid padding="16px 0px">
                    <Input
                        label="패스워드"
                        placeholder="패스워드를 입력해주세요"
                        type='password'
                        _onChange={(e) => {
                            setPwd(e.target.value)
                        }}
                    />
                </Grid>
                <Grid padding="16px 0px">
                    <Input
                        label="패스워드 확인"
                        placeholder="패스워드를 다시 입력해주세요"
                        type='password'
                        _onChange={(e) => {
                            setPwdCheck(e.target.value)
                        }}
                    />
                </Grid>

                <Button text="회원가입" _onClick={signup}></Button>
            </Grid>
        </>
    )
}

SignUp.defaultProps = {}


export default SignUp;

