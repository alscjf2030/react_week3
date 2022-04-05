import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import {getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword } from "firebase/auth";

import {setCookie, getCookie, deleteCookie} from "../../shared/Cookie";
import {auth} from "../../shared/firebase";

// action
// const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// action creator
// const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({user}));
const getUser = createAction(GET_USER, (user) => ({user}));
const setUser = createAction(SET_USER, (user) => ({user}));


// initialState
const initialState = {
    user: null,
    is_login: false,
};

const user_initial = {
    user_name: 'mc'
}

// middleware actions

const loginFB = (id, pwd) => {
    return function (dispatch, getState, {history}, navigate) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, id, pwd)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user)
                dispatch(setUser({
                    user_name: user.displayName,
                    id: id,
                    user_profile: ''
                }))
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }
}
// const loginAction = (user, navigate) => {
//     return function (dispatch, getState, {history}) {
//         dispatch(setUser(user))
//         navigate('/')
//     }
// }

const signupFB = (id, pwd, user_name) => {
    // return async function (dispatch, getState, {history}) {
    return function (dispatch, getState, {history}, navigate) {

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, id, pwd)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user)

                updateProfile(auth.currentUser, {
                    displayName: user_name,
                }).then(() => {
                    dispatch(setUser({user_name: user_name, id: id, user_profile: ''}));
                    navigate('/');
                }).catch((error) => {
                    console.log(error)
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorCode, errorMessage)
            });

        // try {
        //     const userCredential = await createUserWithEmailAndPassword(auth, id, pwd)
        //     // Signed in
        //     const user = userCredential.user;
        //     // ...
        //
        //     console.log(user)
        // } catch (error)  {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     // ..
        //     console.log(errorCode, errorMessage)
        // }

    }
}

// reducer
export default handleActions({
        [SET_USER]: (state, action) =>
            produce(state, (draft) => {
                setCookie("is_login", "success");
                draft.user = action.payload.user;
                draft.is_login = true;
            }),
        [LOG_OUT]: (state, action) =>
            produce(state, (draft) => {
                deleteCookie("is_login");
                draft.user = null;
                draft.is_login = false;
            }),
        [GET_USER]: (state, action) => produce(state, (draft) => {
        }),
    },
    initialState
);

const actionCreators = {
    // logIn,
    getUser,
    logOut,
    // loginAction,
    signupFB,
    loginFB
};

export {actionCreators};