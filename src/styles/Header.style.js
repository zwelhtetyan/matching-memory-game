import styled from 'styled-components';
import { cloud } from '../assets';

export const Header = styled.header`
    text-align: center;
    margin: 1rem 0 3rem 0;
`;

export const Logo = styled.h2`
    font-family: 'Fascinate', cursive;
    font-size: 4rem;
    background-image: url(${cloud});
    -webkit-background-clip: text;
    color: transparent;
    display: inline-block;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Title = styled.h5`
    font-size: 2rem;
    font-family: 'Staatliches', cursive;
    letter-spacing: 5px;
    background-image: linear-gradient(
        90deg,
        rgba(122, 205, 250, 1) 0%,
        rgba(25, 210, 106, 1) 70%
    );
    -webkit-background-clip: text;
    color: transparent;
`;
