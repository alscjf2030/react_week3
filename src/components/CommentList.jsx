import React from "react";
import {Grid, Image, Text} from "../elements"

const CommentList = () => {

    return (
        <Grid padding="16px">
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
        </Grid>
    );
};

export default CommentList;

//이미 export 를 해서 export 를 따로 안 해도 괜찮다.
const CommentItem = (props) => {

    const {user_profile, user_name, user_id, post_id, contents, insert_dt} = props;
    return (
        <Grid is_flex>
            <Grid is_flex width="auto">
                <Image shape="circle"/>
                <Text bold>{user_name}</Text>
            </Grid>

            <Grid is_flex margin="0px 4px">
                <Text margin="0px">{contents}</Text>
                <Text margin="0px">{insert_dt}</Text>
            </Grid>
        </Grid>
    )
}

CommentItem.defaultProps = {
    user_profile: "",
    user_name: "smc",
    user_id: "",
    post_id: 1,
    contents: "고양이가 너무 귀여워요",
    insert_dt: '2021-01-01 19:00:00'
}