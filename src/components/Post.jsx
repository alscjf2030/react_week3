import React from "react";
import {Grid, Image, Text} from "../elements" //indes.jsx로 묶어서 한번에 import

const Post = (props) => {

    return (
        <div>
            <Grid>
                <Grid is_flex>
                    <Image shape='circle' src={props.src}/>
                    <Text bold>{props.user_info.user_name}</Text>
                    <Text>{props.insert_dt}</Text>
                </Grid>
                <Grid padding="16px">
                    <Text>{props.contents}</Text>
                </Grid>
                <Grid>
                    <Image shape='rectangle' src={props.src}/>
                </Grid>
                <Grid padding="16px">
                    <Text bold>댓글{props.comment_cnt}개</Text>
                </Grid>
            </Grid>
        </div>


    )
}

Post.defaultProps = {
    user_info: {
        user_name: "SMC",
        user_profile: "https://images.wallpaperscraft.com/image/single/cat_cute_lie_71887_1920x1080.jpg"
    },
    image_url: "https://images.wallpaperscraft.com/image/single/cat_cute_lie_71887_1920x1080.jpg",
    contents: "고양이입니다.",
    comment_cnt: 500,
    insert_dt: "2022-04-02"

}

export default Post;