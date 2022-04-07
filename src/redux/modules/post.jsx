import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import {firestore, storage} from "../../shared/firebase";
import "moment"
import moment from "moment";

import {getStorage, ref, uploadString} from "firebase/storage"
import {actionCreators as imageActions} from "./image";

const SET_POST = "SET_POST"
const ADD_POST = "ADD_POST"
const EDIT_POST = "EDIT_POST"

// action type
const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}))
const editPost = createAction(EDIT_POST, (post_id, post) => ({ post_id, post }))

//initialState
const initialState = {
    list: [],
}

const initialPost = {
    // id: 0,
    // user_info: {
    //     user_name: "SMC",
    //     user_profile: "https://images.wallpaperscraft.com/image/single/cat_cute_lie_71887_1920x1080.jpg"
    // },
    image_url: "https://images.wallpaperscraft.com/image/single/cat_cute_lie_71887_1920x1080.jpg",
    contents: "",
    comment_cnt: 0,
    insert_dt: moment().format("YYYY-MM-DD hh:mm:ss") // js moment library
    // insert_dt: "2022-04-02"
}

const editPostFB = (post_id = null, post = {}, navigate) => {
    return function (dispatch, getState){

        if(!post_id){
            console.log("게시물 정보가 없습니다.")
            return
        }
        const _image = getState().image.preview;
        const _post_idx = getState().post.list.findIndex(p => p.id === post_id);
        const _post = getState().post.list[_post_idx];

        // console.log(_post)

        const postDB = firestore.collection("post");

        if( _image === _post.image_url ){
            postDB.doc(post_id).update({...post}).then(doc => {
                dispatch(editPost(post_id, {...post}))
                navigate('/', { replace: true })
            })

            return;
        }else{
            const user_id = getState().user.uid
            const _upload = storage
                .ref(`images${user_id}_${new Date().getTime()}`)
                .putString(_image, "data_url");

            _upload.then(snapshot => {
                snapshot.ref
                    .getDownloadURL()
                    .then(url => {
                    // console.log(url);
                    return url; // url 을 밖으로 가져갈 수 없으니 return 값을 then 으로 연결해서 가져감
                }).then(url => {
                    postDB
                        .doc(post_id)
                        .update({...post, image_url: url})
                        .then(doc => {
                        dispatch(editPost(post_id, {...post, image_url: url}))
                        navigate('/', { replace: true })
                    })
                }).catch((err) => {
                    window.alert("이미지 업로드에 실패했습니다.")
                    console.log("이미지 업로드에 문제가 있습니다.", err)
                })
            })
        }
    }
}

const addPostFB = (contents="" , navigate) => {
    return function (dispatch, getState, {history}) {

        const postDB = firestore.collection("post")
        const _user = getState().user.user

        const user_info = {
            user_name: _user.user_name,
            user_id: _user.uid,
            user_profile: _user.user_profile,
        }

        const _post = {
            ...initialPost,
            contents: contents,
            insert_dt: moment().format("YYYY-MM-DD hh:mm:ss")
        }
        // console.log({...user_info, ..._post})
        const _image = getState().image.preview;
        // console.log(_image)
        // console.log(typeof _image) // 이미지의 타입을 알 수 있음

        const _upload = storage.ref(`images${user_info.user_id}_${new Date().getTime()}`).putString(_image, "data_url");

        _upload.then(snapshot => {
            snapshot.ref.getDownloadURL().then(url => {
                // console.log(url);
                return url // url 을 밖으로 가져갈 수 없으니 return 값을 then 으로 연결해서 가져감
            }).then(url => {
                // 어떤 콜렉션에 데이터를 추가할 때 ~~~.add({추가할 정보들})
                postDB.add({...user_info, ..._post, image_url: url}).then((doc) => {
                    let post = {user_info, ..._post, id: doc.id, image_url: url};
                    dispatch(addPost(post))
                    navigate("/", { replace: true})

                    dispatch(imageActions.setPreview(null));
                }).catch((err) => {
                    window.alert("포스트 작성에 실패했습니다.")
                    console.log("포스트 작성에 실패했습니다.", err)
                })
            }).catch((err) => {
                window.alert("이미지 업로드에 실패했습니다.")
                console.log("이미지 업로드에 문제가 있습니다.", err)
            })
        })
    }
}

const getPostFB = () => {

    return function (dispatch, getState, {history}){
        const postDB = firestore.collection('post')

        postDB.get().then((docs) => {
            let post_list = [];
            docs.forEach((doc) => {
                // console.log(doc.id, doc.data())

                // let _post = doc.data();
                //
                // // //['comment_cnt', 'contents', ...]
                // let post = Object.keys(_post).reduce((acc, cur) => {
                //
                //     if(cur.indexOf('user_') !== -1){
                //         return {
                //             ...acc, user_info: {
                //                 ...acc.user_info, [cur]: _post[cur]}}
                //     }
                //     return {...acc, [cur]: _post[cur]}
                // },{id: doc.id, user_info: {} });
                //
                // post_list.push(post)

                // 위 아래 두가지 형식으로 사용 가능능

                let _post = {
                    ...doc.data(),
                    id: doc.id,
                }

                let post = {
                    id: doc.id,
                    user_info: {
                        user_name: _post.user_name,
                        user_profile: _post.user_profile,
                        user_id: _post.user_id
                    },
                    image_url: _post.image_url,
                    contents: _post.contents,
                    comment_cnt: _post.comment_cnt,
                    insert_dt: _post.insert_dt,
                };
                post_list.push(post)
            })
            // console.log(post_list)

            dispatch(setPost(post_list))
        })
    }
}

// reducer
export default handleActions(
    {
        [SET_POST]: (state, action) => produce(state, (draft) => {
            draft.list = action.payload.post_list;
        }),
        [ADD_POST]: (state, action) => produce(state, (draft) => {
            draft.list.unshift(action.payload.post);
        }),
        [EDIT_POST]: (state, action) => produce(state, (draft) => {
            let idx = draft.list.findIndex((p) => p.id === action.payload.post_list);
            draft.list[idx] = {...draft.list[idx], ...action.payload.post}
        }),
    }, initialState
);

const actionCreators = {
    setPost,
    addPost,
    editPost,
    getPostFB,
    addPostFB,
    editPostFB,
}

export {actionCreators}