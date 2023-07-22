import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const PostContainer = styled.div`
    margin-top: -5rem;
`

export const TitlePostContainer = styled.div`
    border-radius: 10px;
    background: ${props => props.theme["base-profile"]};
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);
    width: 54rem;
    height: 10.5rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;

    header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.75rem;
    }

    main {
    
    }

    h1 {
        font-size: 1.5rem;
        ${props => props.theme["base-title"]};
        line-height: 1;
    }

    footer {
        display: flex;
        gap: 2rem;
        align-items: center;
    }
`

export const LinkNavigate = styled(NavLink)`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: ${props => props.theme.blue};
    text-transform: uppercase;

    &:hover {
        opacity: .6;
        transition: .3s;
    }
`

export const PostContentContainer = styled.div`
    padding: 2.5rem 2rem;
    
    h1, h2, h3 {
        color: ${props => props.theme.blue};
    }
    
    code{
        border-radius: 10px;
    }

`