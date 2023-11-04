
import { useState } from "react";
import { IonIcon } from "@ionic/react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid var(--gray);
`

const Star = styled(IonIcon)`
    width: 40px;
    height: 40px;
    padding: 5px;
    visibility: visible;
    &:hover{
        cursor: pointer;
    }
`
const StarDiv = styled.div`
    
`



export default function StarRating({star_amount=5}){
    const [hovered, setHovered] = useState(0);
    // const hovered = 0;
    const [chosen, setChosen] = useState(0);

    const stars = [...Array(star_amount).keys()];

    const is_filled = (index) => {
        let display = 0;
        display = hovered > 0 ? hovered : chosen;
        // console.log(`display>=: ${display>=index}`);
        if (display >= index) return true
        else return false
    }

    return (
        <>
        <Container onMouseLeave={() => setHovered(0)}>
            {
                stars.map(star => {
                    return (
                        <StarDiv key={star}
                        onClick={() => setChosen(star+1)}
                        onMouseEnter={() => setHovered(star+1)}>
                            {
                                is_filled(star+1) ?
                                <Star icon="star"></Star>
                                : <Star icon="star-outline"></Star>
                            }
                        </StarDiv>
                    )
                })
            }
        </Container>
        <p>hovered: {hovered}</p>
        <p>chosen: {chosen}</p>
        </>
    )
}

// onMouseEnter={setHovered(star+1)}>