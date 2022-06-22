import React from 'react';
import styled from 'styled-components';

const AnimateCard = styled.div`
    max-width: 400px;
    width: 90%;
    border-radius: 5px;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        width: 150%;
        height: 60%;
        background: linear-gradient(
            90deg,
            rgba(76, 175, 80, 1) 18%,
            rgba(49, 220, 255, 1) 100%
        );
        animation: rotateBorder 3s linear infinite;
    }

    &::after {
        content: '';
        position: absolute;
        background-color: #000;
        width: 99%;
        height: 99%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @keyframes rotateBorder {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

export default AnimateCard;
