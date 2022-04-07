import React from "react";
import { Grid, Text, Button, Image, Input } from "../elements";
import Upload from "../shared/Upload";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";
import {useNavigate, useParams} from "react-router-dom";

const PostWrite = (props) => {
    const dispatch = useDispatch();
    const params = useParams()
    const navigate = useNavigate()

    const is_login = useSelector((state) => state?.user.is_login);
    const preview = useSelector((state) => state?.image.preview);
    const post_list = useSelector((state) => state?.post.list);

    const post_id = params.id;

    const { history } = props;

    let _post = post_id ? post_list.find((p) => p.id === post_id) : null;

    const [contents, setContents] = React.useState(_post ? _post.contents : "");

    React.useEffect(() => {
        if (post_id && !_post) {
            window.alert("포스트 정보가 없어요!");
            navigate(-1);
            return;
        }

        if (post_id) {
            dispatch(imageActions.setPreview(_post.image_url));
        }
    }, []);

    const changeContents = (e) => {
        setContents(e.target.value);
    };

    const addPost = () => {
        // if()
        dispatch(postActions.addPostFB(contents, navigate));
    };

    const editPost = () => {
        dispatch(postActions.editPostFB(post_id, {contents: contents}, navigate));
    }

    if (!is_login) {
        return (
            <Grid margin="100px 0px" padding="16px" center>
                <Text size="32px" bold>로그인 후에만 이용이 가능합니다.</Text>
                <Button
                    _onClick={() => {
                        navigate("/", { replace: true });
                    }}
                >
                    로그인 하러가기
                </Button>
            </Grid>
        );
    }

    return (
        <React.Fragment>
            <Grid padding="16px">
                <Text margin="0px" size="36px" bold>
                    {post_id ? "게시글 수정" : "게시글 작성"}
                </Text>
                <Upload/>
            </Grid>

            <Grid>
                <Grid padding="16px">
                    <Text margin="0px" size="24px" bold>
                        미리보기
                    </Text>
                </Grid>

                <Image
                    shape="rectangle"
                    src={preview ? preview : "http://via.placeholder.com/400x300"}
                />
            </Grid>

            <Grid padding="16px">
                <Input
                    value={contents}
                    _onChange={changeContents}
                    label="게시글 내용"
                    placeholder="게시글을 입력하세요"
                    multiLine
                />
            </Grid>

            <Grid padding="16px">
                {post_id ? (
                    <Button text="게시글 수정" _onClick={editPost}></Button>
                ) : (
                    <Button text="게시글 작성" _onClick={addPost}></Button>
                )}
            </Grid>
        </React.Fragment>
    );
};

export default PostWrite;

// import React from "react";
// import {Grid, Text, Button, Image, Input} from '../elements'
// import Upload from "../shared/Upload";
//
// import {useSelector, useDispatch} from "react-redux";
// import {useNavigate, useParams} from "react-router-dom";
//
// import {actionCreators as postActions} from "../redux/modules/post";
// import {actionCreators as imageActions} from "../redux/modules/post";
//
// const PostWrite = (props) => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const params = useParams()
//
//     const is_login = useSelector((state) =>state?.user.is_login);
//     const preview = useSelector((state) => state?.image.preview);
//     const post_list = useSelector((state) => state?.post.list);
//
//     console.log(post_list)
//     // console.log(useParams()) -> props.match.params.id : Route 구버전용 usePrams() 신버전
//     const post_id = params.id;
//     console.log(post_id)
//
//     let _post = post_id ? post_list.find((p) => p.id === post_id) : null;
//     console.log(_post)
//
//     const [contents, setContents] = React.useState(_post ? _post.contents : "")
//
//     const [postData, setPostData] = React.useState()
//
//     React.useEffect(() => {
//         if ( post_id && post_list.length ) {
//             setPostData(post_list.find((post) => post.id === post_id))
//         }
//         if( post_id && !_post){
//             window.alert('포스트 정보가 없어요')
//             navigate(-1)
//
//             return;
//         }
//         if( post_id ){
//             dispatch(imageActions.setPreview(_post.image_url))
//         }
//
//     }, [post_id, post_list])
//
//     // React.useEffect(() => {
//     //     if(post_id && !_post){
//     //         console.log("포스트 정보가 없어요"); // alert 가능
//     //         // navigate(-1)
//     //         // navigate(-1) === history.goBack()
//     //
//     //         return;
//     //     }
//     //
//     //     // if(post_id){
//     //     //     dispatch(imageActions.setPreview(_post.image_url))
//     //     // }
//     // }, [])
//
//
//
//
//
//     const changeContents = (e) => {
//         setContents(e.target.value);
//         // console.log(e.target.value)
//     }
//
//     const addPost = () => {
//         dispatch(postActions.addPostFB(contents, navigate));
//     }
//
//     if(!is_login){
//         return (
//             <Grid margin="100px 0" padding='16px' center>
//                 <Text size='32px' bold >로그인 후에만 쓸 수 있어요.</Text>
//                 <Button _onClick={()=>{navigate('/' , { replace: true } )}}>로그인 하러 가기</Button>
//             </Grid>
//         )
//     }
//
//     return (
//         <div>
//             <Grid padding='16px'>
//                 <Text size='36px' bold>게시글 작성</Text>
//                 <Upload/>
//             </Grid>
//
//             <Grid>
//                 <Grid padding='16px'>
//                     <Text size='24px' bolde margin='0px'>미리보기</Text>
//                 </Grid>
//
//                 <Image shape='rectangle' src={preview? preview : "https://via.placeholder.com/400x300"}/>
//             </Grid>
//
//             <Grid padding='16px'>
//                 <Input
//                     value={contents}
//                     _onChange={changeContents}
//                     label='게시글 내용'
//                     placeholder='게시글 작성'
//                     multiLine
//                 />
//             </Grid>
//
//             <Grid padding='16px'>
//                 <Button text='게시글 작성' _onClick={addPost}></Button>
//             </Grid>
//         </div>
//     )
// }
//
// export default PostWrite