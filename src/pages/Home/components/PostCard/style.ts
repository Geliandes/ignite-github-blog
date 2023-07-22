import { styled } from "styled-components";

export const PostCardContainer = styled.div`
    background: ${props => props.theme["base-post"]};
    width: 26rem;
    height: 16.25rem;
    border: none;
    border-radius: 10px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

`

export const PostTextWrapper = styled.div`
    overflow: hidden;
    font-size: 1rem;

    > p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 4;
        font-size: 1rem;
        color: ${props => props.theme["base-text"]};
    }
`;

export const PostTitle = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: space-between;

    > p {
        color: ${props => props.theme["base-title"]};
        font-size: 1.25rem;
        word-wrap: break-word;
        flex: 1;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
    }

    span {
        font-size: 0.875rem;
        color: ${props => props.theme["base-span"]};
        line-height: 2.5;
    }
`