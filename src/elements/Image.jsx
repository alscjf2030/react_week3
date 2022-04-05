import styled from "styled-components";
import React from "react";

const Image = (props) => {
    const {shape, src, size} = props;

    const styles = {
        src: src,
        size: size,
    }

    if(shape === 'circle'){
        return(
            <ImageCircle {...styles}></ImageCircle>
        )
    }

    if(shape === 'rectangle'){
        return (
            <AspectOutter>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>
        )
    }
<<<<<<< HEAD
    //
    // return (
    //     <ImageCircle></ImageCircle>
    // )
=======

    return (
        <ImageCircle></ImageCircle>
    )
>>>>>>> 2f2a128cc50b37a590a8e647f1f2ddd5f22ae66e
}

Image.defaultProps = {
    shape: "circle",
    src: "https://images.wallpaperscraft.com/image/single/cat_cute_lie_71887_1920x1080.jpg",
    size: 36,
}

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
`

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  
  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 4px;
`

export default Image;