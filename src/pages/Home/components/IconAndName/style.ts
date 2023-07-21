import { styled } from "styled-components";

export const IconAndNameContainer = styled.div`
    display: flex;
    color: ${props => props.theme["base-text"]};
    align-items: center;
    gap: 0.5rem;

    &:hover {
        opacity: 0.7;
        transition: .3s;
    }

`