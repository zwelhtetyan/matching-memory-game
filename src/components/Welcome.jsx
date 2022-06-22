import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WelcomeCard, Wrapper } from '../styles/Welcome.style';
import { Title } from '../ui/AnimateCardTitle';
import BtnPrimary from '../ui/BtnPrimary';

const Welcome = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <WelcomeCard>
                <Title>WELCOME ADVENTURER!</Title>
                <BtnPrimary
                    width='100px'
                    height='40px'
                    margin='2rem 0 0 0'
                    onClick={() => navigate('/game')}
                >
                    Start
                </BtnPrimary>
            </WelcomeCard>
        </Wrapper>
    );
};

export default Welcome;
