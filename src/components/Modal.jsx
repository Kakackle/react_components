// TODO: nie wyswietla sie na cala strone, tylko na czesc
import styled from "styled-components";
import { useState } from "react";
export default function Modal(){
    const [clicked, setClicked] = useState(false);
    return (
        <ModalDiv>
            <Content>
                <Button onClick={()=>{prev => !prev}}>{clicked}</Button>
            </Content>
        </ModalDiv>
    )
}

const ModalDiv = styled.div`
    width: 100vw;
    height: 100vw;
    background-color: rgba(0,0,0,0.75);
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    width: 200px;
    height: 100px;
    display: flex;
    align-items: center;
    border-radius: 9px;
    background-color: rgba(255,255,255,0.9);
    z-index: 6;
`

const Button = styled.button`
    
`