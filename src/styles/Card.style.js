import styled from 'styled-components';

export const CardWrapper = styled.div`
    width: calc(25% - 0.2rem);
    height: calc(25% - 0.2rem);
    margin: 0.1rem;

    background-color: transparent;
    perspective: 1000px;

    & > button {
        ${({ flipped }) => flipped && 'transform: rotateY(180deg);'}
    }
`;

export const InnerCard = styled.button`
    position: relative;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: transform 0.6s;
    transform-style: preserve-3d;

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
    position: absolute;

    width: 60%;

    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    transform: rotateY(180deg);
`;

export const Back = styled(Front)`
    width: 100%;
    height: 100%;
    transform: none;

    background: linear-gradient(
        152deg,
        rgba(25, 210, 106, 1) 0%,
        rgba(122, 205, 250, 1) 100%
    );
`;
