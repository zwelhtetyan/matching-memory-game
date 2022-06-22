import styled from 'styled-components';
import AnimateCard from '../ui/AnimateCard';

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    background: #000000c7;
    background: #000000e0;
`;

export const ResultCard = styled(AnimateCard)`
    padding: 2rem 0;
`;

export const ResultTextWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    @media screen and (max-width: 350px) {
        flex-direction: column;
    }
`;

export const ResultText = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: transparent;
    z-index: 10;
    margin: 0 1rem;

    @media screen and (max-width: 350px) {
        justify-content: flex-start;
        margin-bottom: 0.5rem;
    }
`;

export const Icon = styled.div`
    width: 25px;
    height: 25px;
    background: url(${({ img }) => img}) center no-repeat transparent;
    background-size: cover;
`;
export const Indicator = styled.img`
    margin: 0 0.2rem 0 0.1rem;
    background: transparent;
`;
export const Desc = styled.p`
    font-size: 20px;
    font-weight: 900;
`;

export const StarContainer = styled.div`
    width: 100%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    z-index: 10;
    margin-bottom: 1rem;
`;

export const StarIcon = styled.img`
    background: transparent;
    transform: scale(0);
    animation: animateStar 0.5s linear;
    animation-fill-mode: forwards;

    @keyframes animateStar {
        100% {
            transform: scale(1);
        }
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;

    margin-top: 1rem;
`;
