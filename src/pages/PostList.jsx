import React from "react";
import {useSelector, useDispatch} from "react-redux";
import Post from "../components/Post";
import {actionCreators as postActions} from "../redux/modules/post";
import {Grid} from "../elements";
import {useNavigate} from "react-router-dom";

const PostList = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const post_list = useSelector((state) => state.post.list);
    const user_info = useSelector((state) => state.user.user)

    React.useEffect(() => {
        if(post_list.length === 0){
            dispatch(postActions.getPostFB())
        }
    }, [])
    return (
        <div>
            <Grid bg={"#EFF6FF"} padding="20px 0">
                {/*<Post/>*/}
                {post_list.map((p, idx) => {
                    if (p.user_info.user_id === user_info?.uid) {
                        return (

                            <Grid bg={"#ffffff"}
                                key={p.id}
                                _onClick={() => {
                                    navigate(`/post/${p.id}`)
                                }}>
                                <Post {...p} is_me/>
                            </Grid>
                        )
                    } else {
                        return (
                            <Grid bg={"#ffffff"}
                                key={p.id}
                                  _onClick={() => {
                                      navigate(`/post/${p.id}`)
                                  }}>
                                <Post {...p}/>
                            </Grid>
                        )
                    }
                })
                }
            </Grid>
        </div>
    )
}

export default PostList