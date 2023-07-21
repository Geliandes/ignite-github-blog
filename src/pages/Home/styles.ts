import { styled } from "styled-components";

export const HomeContainer = styled.div`

`

export const SummaryContainer = styled.div`
    height: 13.25rem;
    width: 100%;
    background: ${props => props.theme["base-profile"]};
    border-radius: 10px;
    border: 0;
    margin-top: -10%;
    padding: 2rem 2.5rem;
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);
    display: flex;
    gap: 2rem;   

    > img {
        max-width: 9.25rem;
        border-radius: 8px;
    }
`

export const DetailsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > p {
        font-size: 1rem;
        color: ${props => props.theme["base-text"]};
    }

`

export const NameAndIconContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    gap: 0.5rem;

    > h1 {
        flex: 1;
        font-size: 1.5rem;
    }

    span {
        font-weight: bold;
    }

    div {
        display: flex;
        justify-content: space-between;
        gap: 0.5rem;
        align-items: center;
        color: ${props => props.theme.blue};

        &:hover {
            opacity: 0.7;
            transition: .3s;
        }
    }

`

export const IconContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    align-items: center;
    margin-top: 1rem;
`

export const SearchPostContainer = styled.div`

    padding-top: 4.5rem;

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 0.75rem;
    
        p {
            font-size: 1.125rem;
            color: ${props => props.theme["base-subtitle"]};
        }

        span {
            font-size: 0.875rem;
            color: ${props => props.theme["base-span"]};
        }
    }

    > input {
        padding: 0.75rem 1rem;
        border-radius: 6px;
        border: 1px solid ${props => props.theme["base-border"]};
        background: ${props => props.theme["base-input"]};
        width: 100%;
        color: ${props => props.theme["base-text"]};
        
    }
`