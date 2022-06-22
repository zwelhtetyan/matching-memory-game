import styled from 'styled-components';

export const Title = styled.h1`
    font-family: 'Staatliches', cursive;
    background-color: transparent;
    letter-spacing: 4px;
    font-size: 25px;
    position: relative;
    z-index: 10;

    -webkit-background-clip: text;
    color: transparent;
    animation: animateBg 1s infinite linear;

    @keyframes animateBg {
        from {
            background-image: linear-gradient(
                90deg,
                rgba(122, 205, 250, 1) 0%,
                rgba(25, 210, 106, 1) 80%
            );
        }
        to {
            background-image: linear-gradient(
                90deg,
                rgba(25, 210, 106, 1) 0%,
                rgba(122, 205, 250, 1) 80%
            );
        }
    }
`;
