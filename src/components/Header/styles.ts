import { styled } from "styled-components";
import headerBackground from '../../assets/header-background.svg';

export const HeaderContainer = styled.header`
    background-image: url(${headerBackground});
    height: 18.5rem;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    justify-content: center;

    img{
        margin-top: 4rem;
        height: 6.125rem;
    }
`;
