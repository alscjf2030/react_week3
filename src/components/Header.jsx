import React from "react";
<<<<<<< HEAD
import {Grid, Text, Button} from "../elements";
import {deleteCookie, getCookie} from "../shared/Cookie";

import {useSelector, useDispatch} from "react-redux";
import {actionCreators as userAction} from "../redux/modules/user";

import {useNavigate} from "react-router-dom";
import {apiKey} from "../shared/firebase";

const Header = (props) => {
    // const [is_login, setIsLogin] = React.useState(false);
    // React.useEffect(() => {
    //     let cookie = getCookie('user_id')
    //
    //     if(cookie){
    //         setIsLogin(true)
    //     }else {
    //         setIsLogin(false)
    //     }
    // })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const is_login = useSelector((state) => state?.user.is_login)

    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`

    const is_session = sessionStorage.getItem(_session_key)? true : false

    // console.log(is_session)
    // console.log(_session_key)
    // console.log(sessionStorage.getItem(_session_key))

    if(is_login && is_session){
        return (
            <>
                <Grid is_flex padding="4px 16px">
                    <Grid>
                        <Text margin="0px" size="24px" bold>
                            헬로
                        </Text>
                    </Grid>

                    <Grid is_flex>
                        <Button text="내정보"></Button>
                        <Button text="알림"></Button>
                        <Button text="로그아웃" _onClick={() => {
                            dispatch(userAction.logoutFB())
                        }}></Button>
                    </Grid>
                </Grid>
            </>
        );
    }
    return (
        <>
            <Grid is_flex padding="4px 16px">
=======
import styled from "styled-components";
import {Grid, Text, Button} from "../elements"

const Header = (props) => {

    return (
        <div>
            <Grid is_flex padding="4px 0">
>>>>>>> 2f2a128cc50b37a590a8e647f1f2ddd5f22ae66e
                <Grid>
                    <Text margin="0px" size="24px" bold>헬로</Text>
                </Grid>

                <Grid is_flex>
<<<<<<< HEAD
                    <Button text="로그인" _onClick={() => {
                        navigate('/login')
                    }}></Button>
                    <Button text="회원가입" _onClick={() => {
                        navigate('/signup')
                    }}></Button>
                </Grid>
            </Grid>
        </>
=======
                    <Button text="로그인"></Button>
                    <Button text="회원가입"></Button>
                </Grid>
            </Grid>
        </div>
>>>>>>> 2f2a128cc50b37a590a8e647f1f2ddd5f22ae66e
    )
}

Header.defaultProps = {}

<<<<<<< HEAD
export default Header;
=======

export default Header
>>>>>>> 2f2a128cc50b37a590a8e647f1f2ddd5f22ae66e
