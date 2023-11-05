import { useState } from "react";
import styled from "styled-components";

export default function Carousel({width=300, height=200, items}) {
    const [shift, setShift] = useState(0);
    const items_len = items.length;

    const moveLeft = (index) => {
        if ((shift-1) > -1*items_len) {setShift(shift-1)}
    }

    const moveRight = (index) => {
        if ((shift+1) <= 0) {setShift(shift+1)}
    }

    return (
        <>
        <CarouselDiv style={{width: width + 'px', height: height + 'px'}}>
            {
                items.map((item, index) => {
                    return (
                    <CarouselItem key={index}
                    style={{
                        left: width * (item.index + shift)
                    }}
                    >Index: {item.index} left: {(item.index + shift)}</CarouselItem>
                    )
                })
            }
            <Control style={{left: 0}} onClick={moveRight}>&lt;</Control>
            <Control style={{right: 0}} onClick={moveLeft}>&gt;</Control>
        </CarouselDiv>
        <p>shift: {shift}</p>
        </>
    )
}

const CarouselDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 2px solid var(--gray-dark);
    border-radius: 9px;
    position: relative;
    overflow: hidden;
`

const CarouselItem = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    background-color: var(--gray-light);
    color: var(--gray-dark);
    font-weight: 500;
    position: absolute;
`

const Control = styled.button`
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    height: 25px;
    width: 25px;
    font-size: 20px;
    position: absolute;
    background-color: var(--gray);
    border-radius: 50%;
    &:hover{
        cursor: pointer;
        filter: brightness(0.75);
    }
`