import React from "react";
import styled from "styled-components";

import {Text, Grid} from "./index";

const Input =(props) => {
    const {label, placeholder, _onChange, type} = props;

    return (
        <div>
            <Grid>
                <Text margin="0">{label}</Text>
                <ElInput type={type} placeholder={placeholder} onChange={_onChange}/>
            </Grid>
        </div>
    )
}

Input.defaultProps = {
    label: '텍스트',
    placeholder: '텍스트를 입력해주세요.',
    type: "text",
    _onChange: () => {}, //콜백함수
}

const ElInput = styled.input`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`

export default Input;