import React from "react";
import {Grid, Text, Button} from "../elements";
import {deleteCookie, getCookie} from "../shared/Cookie";

import {useSelector, useDispatch} from "react-redux";
import {actionCreators as userAction} from "../redux/modules/user";

const Header = (props) => {
    // const [is_login, setIsLogin] = React.useState(false);

    const is_login = useSelector((state) => state?.user.is_login)
    const dispatch = useDispatch()
    // React.useEffect(() => {
    //     let cookie = getCookie('user_id')
    //
    //     if(cookie){
    //         setIsLogin(true)
    //     }else {
    //         setIsLogin(false)
    //     }
    // })
    if(is_login){
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
                            dispatch(userAction.logOut({}))
                        }}></Button>
                    </Grid>
                </Grid>
            </>
        );
    }
    return (
        <>
            <Grid is_flex padding="4px 16px">
                <Grid>
                    <Text margin="0px" size="24px" bold>헬로</Text>
                </Grid>

                <Grid is_flex>
                    <Button text="로그인"></Button>
                    <Button text="회원가입"></Button>
                </Grid>
            </Grid>
        </>
    )
}

Header.defaultProps = {}

export default Header;
