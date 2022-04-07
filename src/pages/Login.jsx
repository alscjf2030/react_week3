import React from "react";
// import { setCookie, deleteCookie } from "../shared/Cookie";
import {Text, Input, Grid, Button} from "../elements"

import {useDispatch} from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user"
import {useNavigate} from "react-router-dom";
import {emailCheck} from "../shared/common";

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

        // 이메일 형식 정규식
        let _reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z]*)@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;
        console.log(_reg.test(id));
        // 정규식 테스트 true or false 로 나옴.

        if(id ==='' || pwd === ''){
            window.alert('아이디 혹은 비밀번호를 입력해 주세요.')
            return;
        }

        if(!emailCheck(id)){
            window.alert('이메일 형식이 맞지 않습니다.')
            return;
        }

        // if(pwd !== ){
        //     window.alert("비밀번호가 일지하지 않습니다.")
        //     return;
        // }

        dispatch(userActions.loginFB(id, pwd, navigate))
    }

    return (
        <div>
            <Grid padding={"16px"}>
                <Text size="32px" bold>로그인</Text>
                <Grid padding={"16px 0"}>
                    <Input
                        label="아이디"
                        placeholder="아이디를 입력해주세요"
                        _onChange={(e) => {
                            setId(e.target.value)
                        }}
                    />
                </Grid>
                <Grid padding={"16px 0"}>
                    <Input
                        label="패스워드"
                        placeholder="패스워드를 입력해주세요"
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


export default Login;

