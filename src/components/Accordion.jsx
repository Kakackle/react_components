import { useState } from "react";
import styled from "styled-components";

const selected = {
    border: '2px solid var(--color-3)',
}

const unselected = {
    border: '2px solid var(--gray)',
}

export default function Accordion({width=300, items}) {
    const [isOpen, setIsOpen] = useState(0);
    
    const openContainer = (index) => {
        if (isOpen === index) {setIsOpen(0)}
        else {setIsOpen(index)}
        // console.log('isOpen: ' + isOpen + 'typeof: ' + typeof(isOpen));
    }
    
    return (
        <>
        <AccordionDiv style={{width: width + 'px'}}>
            {
                items.map((item, index)=>{
                    return (
                        <Container key={index}>
                            <Head onClick={()=>openContainer(parseInt(item.index))}
                            style={isOpen === parseInt(item.index) ? selected: unselected}
                            >{item.head}</Head>
                            {(isOpen === item.index) && <Content>{item.content}</Content>}
                        </Container>
                    )
                })
            }
        </AccordionDiv>
        {/* <p>isOpen: {{isOpen}}</p> */}
        </>
    )
}

const AccordionDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border: 2px solid var(--gray-light);
    border-radius: 9px;
`

const Container = styled.div`
    /* position: relative; */
    border-radius: 3px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0;
`

const Head = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 36px;
    border: 2px solid var(--gray);
    padding: 2px 4px;
    &:hover{
        cursor: pointer;
        box-shadow: var(--color-2) 0px 0px 10px 1px;
    }
`

const Content = styled.div`
    padding: 4px;
`
