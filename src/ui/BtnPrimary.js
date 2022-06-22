import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    margin: ${({ margin }) => margin};
    background: #000;
    font-family: 'Staatliches', cursive;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    z-index: 10;
    user-select: none;

    border: 2px solid;
    border-radius: 1px;

    border-left-color: rgba(25, 210, 106, 1);
    border-top-color: rgba(25, 210, 106, 1);
    border-right-color: rgba(122, 205, 250, 1);
    border-bottom-color: rgba(122, 205, 250, 1);

    &:hover {
        background: linear-gradient(
            152deg,
            rgba(25, 210, 106, 1) 0%,
            rgba(122, 205, 250, 1) 100%
        );
        color: #000;
    }

    @media screen and (max-width: 355px) {
        ${({ margin }) => margin && 'margin-top: 1rem'}
    }
`;

const BtnPrimary = ({ children, ...props }) => {
    return <Button {...props}>{children}</Button>;
};

export default BtnPrimary;
