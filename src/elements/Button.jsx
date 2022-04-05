import React from "react";
import styled from "styled-components";

const Button = (props) => {
<<<<<<< HEAD
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
=======
    const {text, _onClick} = props;

    return (
        <div>
            <ElButton onClick={_onClick}>{text}</ElButton>
        </div>
>>>>>>> 2f2a128cc50b37a590a8e647f1f2ddd5f22ae66e
    )
}

Button.defaultProps = {
    text: '텍스트',
<<<<<<< HEAD
    _onClick: () => {},
    is_float: false,
=======
    _onClick: () =>{}
>>>>>>> 2f2a128cc50b37a590a8e647f1f2ddd5f22ae66e
}

const ElButton = styled.button`
  width: 100%;
  background-color: #212121;
  color: #ffffff;
  padding: 12px 0;
  box-sizing: border-box;
  border: none;
`

<<<<<<< HEAD
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

=======
>>>>>>> 2f2a128cc50b37a590a8e647f1f2ddd5f22ae66e
export default Button