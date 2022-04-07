// import {storage} from "./firebase";
import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {Button, Grid} from "../elements"
import {actionCreators as imageActions} from "../redux/modules/image";

const Upload = (props) => {
    const dispatch = useDispatch()
    const fileInput = React.useRef()

    const is_uploading = useSelector(state => state.image.uploading)

    const selectFile = (e) => {
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.files[0])
        //
        // console.log(fileInput.current.files[0])

        // 업로드 파일 미리보기
        const reader = new FileReader();
        const file = fileInput.current.files[0];

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            // console.log(reader.result)
            dispatch(imageActions.setPreview(reader.result))
        }
    }

    const uploadFB = () => {
        let image = fileInput.current.files[0];
        dispatch(imageActions.uploadImageFB(image))
        // const _upload = storage.ref(`images/${image.name}`).put(image);
        //
        // _upload.then((snapshot) => {
        //     console.log(snapshot)
        //
        //     snapshot.ref.getDownloadURL().then((url) => {
        //         console.log(url)
        //     })
        // })
    }

    return (
        <Grid is_flex>
            <input
                type='file'
                onChange={selectFile}
                ref={fileInput}
                disabled={is_uploading}
            />
            <Button _onClick={uploadFB}>업로드하기</Button>
        </Grid>
    )
}

export default Upload