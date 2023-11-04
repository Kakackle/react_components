import { useState } from "react";
// import styles from "../styles/dropdown.module.css";
import {styled, keyframes} from "styled-components";
import { IonIcon } from "@ionic/react";
import PropTypes from 'prop-types'

// import { CSSTransitionGroup } from 'react-transition-group'
import { CSSTransition, Transition } from "react-transition-group";
import { useRef } from "react";

import "../styles/animations.css"

const oddStyle = {
    backgroundColor: 'var(--gray-light)',
}

const transitionStyles = {
    entering:{
        opacity: 1,
        transform: 'translateY(-20px)'
        },
    exiting:{
        opacity: 0,
        transform: 'translateY(0)'
        },
}

const duration = 300;

export default function Dropdown({width=200, items}){
    const [isOpen, setIsOpen] = useState(false);
    const nodeRef = useRef(null);
    return (
        <Container style={{width: width + 'px'}}>
            <Top>
                <TextCenter className="text-basic">MENU</TextCenter>
                <IconMenu icon={isOpen? "menu-sharp" : "chevron-down-sharp"}
                onClick={() => setIsOpen(prev => !prev)}></IconMenu>
            </Top>
            {/* { isOpen && */}
            <CSSTransition
            in={isOpen} timeout={duration} classNames="slide" unmountOnExit
            nodeRef={nodeRef}
            >
            <DropdownList ref={nodeRef}>
                {/* {
                    items ?
                    items.map((item, index) => {
                        return <Item key={index}
                        style={index%2 == 1 ? oddStyle: {}}
                        >{item}</Item>
                    }):
                    <Item>No items to display</Item>
                }
                <Item></Item> */}
                {
                items.map((item, index) => {
                        return <Item key={index}
                        style={index%2 == 1 ? oddStyle: {}}
                        >{item}</Item>
                    })
                }
            </DropdownList>
            </CSSTransition>
            {/* } */}
        </Container>
    )
}

Dropdown.propTypes = {
    width: PropTypes.number,
    items: PropTypes.array,
}

const Container = styled.div`
    /* border: 2px solid var(--gray); */
    border-radius: 3px;
    position: relative;
`;

const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 36px;
    border: 2px solid var(--gray);
`

const TextCenter = styled.p`
    width: 100%;
    justify-self: center;
`

const IconMenu = styled(IonIcon)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    width: 24px;
    padding: 4px;

    &:hover{
        cursor: pointer;
        border: 2px solid var(--gray-dark);
        border-radius: 3px;
    }
`

const DropdownList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0;
    border: 2px solid var(--gray-light);
    position: absolute;
    top: 34px;
    list-style: none;

    align-items: center;
    z-index: -1;
`

const Item = styled.li`
    width: 100%;
    padding: 2px;
    &:hover{
        filter: brightness(0.75);
        cursor: pointer;
    }
`

