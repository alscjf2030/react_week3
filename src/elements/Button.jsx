import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const {text, _onClick, is_float} = props;


    if (is_float) {
        return (
            <>
                <FloatButton onClick={_onClick}>{text}</FloatButton>
            </>
        )
    }


    return (
        <ElButton onClick={_onClick}>{text}</ElButton>
    )
}

Button.defaultProps = {
    text: '텍스트',
    _onClick: () => {},
    is_float: false,
}

const ElButton = styled.button`
  width: 100%;
  background-color: #212121;
  color: #ffffff;
  padding: 12px 0;
  box-sizing: border-box;
  border: none;
`

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: #212121;
  color: #ffffff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Button