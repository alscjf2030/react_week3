import React from "react";
import {Grid, Image, Text, Button} from "../elements"
//index.jsx 로 묶어서 한번에 import
import {useNavigate, useParams} from "react-router-dom";
import {actionCreators as postActions} from "../redux/modules/post";
import {useDispatch, useSelector} from "react-redux";

const Post = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const params = useParams()

    const post_list = useSelector((state) => state?.post.list);

    const post_id = params.id;

    let _post = post_id ? post_list.find((p) => p.id === post_id) : null;

    const [contents, setContents] = React.useState(_post ? _post.contents : "");

    const deletePost = () => {
        dispatch(postActions.deletePostFB(post_id, {contents: contents}, navigate));
    }

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
                        width="auto"
                        margin="4px"
                        padding="4px"
                        _onClick={() => {deletePost()}}>삭제</Button>}
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