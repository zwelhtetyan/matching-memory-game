import React from 'react';
import { Header as Wrapper, Logo, Title } from '../styles/Header.style';

const Header = () => {
    return (
        <Wrapper>
            <Logo>Matching</Logo>
            <Title>Memory Game</Title>
        </Wrapper>
    );
};

export default Header;
