import React from "react";
import Post from "../components/Post";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";

import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {firestore} from "../shared/firebase";

const PostDetail = (props) => {
    const params = useParams()

    const id = params.id;
    console.log(id)
    const user_info = useSelector((state) => state.user.user)

    const post_list = useSelector(store => store.post.list);
    const post_idx = post_list.findIndex(p => p.id === id);
    const post_data = post_list[post_idx];
    console.log(post_data)

    const [post, setPost] = React.useState(post_data? post_data : null);

    React.useEffect(() => {

        if(post){
            return;
        }
        const postDB = firestore.collection("post");
        postDB.doc(id).get().then(doc => {
            console.log(doc);
            console.log(doc.data());

            let _post = doc.data()
            let post = Object.keys(_post).reduce((acc, cur) => {
                    if (cur.indexOf("user_") !== -1) {
                        return {
                            ...acc,
                            user_info: {...acc.user_info, [cur]: _post[cur]},
                        };
                    }
                    return {...acc, [cur]: _post[cur]};
                },
                {id: doc.id, user_info: {}}
            );

            setPost(post)
        })

    }, [])

    return (
        <div>
            {post && <Post {...post} is_me={post.user_info.user_id === user_info.uid}/>}
            <CommentWrite/>
            <CommentList/>
        </div>
    )
}

export default PostDetail

