import React from "react";
import {Grid, Image, Text, Button} from "../elements"
//index.jsx 로 묶어서 한번에 import
import {useNavigate} from "react-router-dom";

const Post = (props) => {
    const navigate = useNavigate();

    return (
        <div>
            <Grid padding="16px">
                <Grid is_flex width="auto">
                    <Image shape='circle' src={props.src}/>
                    <Text bold>{props.user_info.user_name}</Text>
                    <Text>{props.insert_dt}</Text>
                    {props.is_me && <Button
                        width="auto" margin="4px" padding="4px" _onClick={() => {
                        navigate(`/write/${props.id}`)
                    }}
                    >수정</Button>}
                    {props.is_me && <Button
                        width="auto" margin="4px" padding="4px" _onClick={() => {
                        navigate(`/write/${props.id}`)
                    }}
                    >삭제</Button>}
                </Grid>
                <div style={{display:"flex", justifyContent: "flex-start",}}>
                    <div style={{width:"50%", textAlign:"center"}}>
                        <Text>{props.contents}</Text>
                    </div>
                    <div style={{width:"50%"}}>
                        <Image shape='rectangle' src={props.image_url}/>
                    </div>
                </div>

                <Grid padding="16px">
                    <Text margin='0px' bold>댓글{props.comment_cnt}개</Text>
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
    insert_dt: "2022-04-02",
    is_me: false,
}

export default Post;