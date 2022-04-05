import React from "react";
import styled from "styled-components";

import {Text, Grid} from "./index";

const Input =(props) => {
<<<<<<< HEAD
    const {label, placeholder, _onChange, type} = props;
=======
    const {label, placeholder, _onChange} = props;
>>>>>>> 2f2a128cc50b37a590a8e647f1f2ddd5f22ae66e

    return (
        <div>
            <Grid>
                <Text margin="0">{label}</Text>
<<<<<<< HEAD
                <ElInput type={type} placeholder={placeholder} onChange={_onChange}/>
=======
                <ElInput placeholder={placeholder} onChange={_onChange}/>
>>>>>>> 2f2a128cc50b37a590a8e647f1f2ddd5f22ae66e
            </Grid>
        </div>
    )
}

Input.defaultProps = {
    label: '텍스트',
    placeholder: '텍스트를 입력해주세요.',
<<<<<<< HEAD
    type: "text",
=======
>>>>>>> 2f2a128cc50b37a590a8e647f1f2ddd5f22ae66e
    _onChange: () => {}, //콜백함수
}

const ElInput = styled.input`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`

export default Input;