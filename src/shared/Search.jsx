import React from "react";
import _ from "lodash"

const Search = () => {
    const [text, setText] = React.useState("")

    const debounce = _.debounce((val) => {
        console.log("debounce :::", val.target.value);
    }, 1000);
//  debounce 를 이용하면 키보드를 누르는 동안에는 입력값이 안나오고
//  입력을 다 한 뒤에 1000밀리초 뒤에 입력값이 나오게 함.

    const throttle = _.throttle((val) => {
        console.log("throttle", val.target.value);
    }, 1000)
//  throttle 을 이용하면 키보드를 누르는 중간에도 입력값이 나온다. 1000밀리초 단위로.

    const keyPress = React.useCallback(throttle, [])
    // 함수를 메모이제이션한다. 컴포넌트가 리렌더링이 되더라도 함수를 초기화 하지 마라.
    // 메미오제이션 한 저장한 함수를 계속 쓸 것이다.

    const onChange = (val) => {
        // console.log(val.target.value)
        setText(val.target.value)
        keyPress(val)
    }

    return (
        <div>
            <input type="text" onChange={onChange} value={text}/>
        </div>
    )
}

export default Search