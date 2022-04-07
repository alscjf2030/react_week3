import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const {text, _onClick, is_float, children, margin, width, padding} = props;

    if (is_float) {
        return (
            <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
        )
    }

    const styles = {
        margin: margin,
        width: width,
        padding: padding
    }

    return (
        <ElButton {...styles} onClick={_onClick}>{text ? text : children}</ElButton>
    )
}

Button.defaultProps = {
    text: false,
    _onClick: () => {
    },
    is_float: false,
    children: null,
    margin: false,
    width: '100%',
    padding: "12px 0px"
}

const ElButton = styled.button`
  width: ${(props) => props?.width};
  background-color: #212121;
  color: #ffffff;
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
  ${(props) => (props.margin ? `margin: ${props.margin}` : '')}
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