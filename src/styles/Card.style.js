import styled from 'styled-components';

export const Card = styled.button`
    border: none;
    outline: none;
    background: transparent;

    width: calc(25% - 0.2rem);
    height: calc(25% - 0.2rem);
    margin: 0.1rem;
    position: relative;
`;

export const InnerCard = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    outline: none;
    border: 2px solid;
    border-right-color: rgba(122, 205, 250, 1);
    border-top-color: rgba(122, 205, 250, 1);
    border-left-color: rgba(25, 210, 106, 1);
    border-bottom-color: rgba(25, 210, 106, 1);
    border-radius: 1px;
    cursor: pointer;
`;

export const Front = styled.img`
    width: 60%;
    position: absolute;
    transform: rotateY(90deg);

    transition: all ease-in 0.2s;

    ${({ flipped }) =>
        flipped && 'transform: rotateY(0);transition-delay: 0.2s;'}
`;

export const Back = styled.div`
    background: linear-gradient(
        152deg,
        rgba(25, 210, 106, 1) 0%,
        rgba(122, 205, 250, 1) 100%
    );
    width: 100%;
    height: 100%;

    transition: all ease-in 0.2s;
    transition-delay: 0.2s;

    ${({ flipped }) =>
        flipped && 'transform: rotateY(90deg);transition-delay: 0s;'}
`;
