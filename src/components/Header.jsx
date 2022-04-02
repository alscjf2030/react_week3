import React from "react";
import styled from "styled-components";
import {Grid, Text, Button} from "../elements"

const Header = (props) => {

    return (
        <div>
            <Grid is_flex padding="4px 0">
                <Grid>
                    <Text margin="0px" size="24px" bold>헬로</Text>
                </Grid>

                <Grid is_flex>
                    <Button text="로그인"></Button>
                    <Button text="회원가입"></Button>
                </Grid>
            </Grid>
        </div>
    )
}

Header.defaultProps = {}


export default Header