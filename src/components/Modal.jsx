import React from 'react';
import {
    Desc,
    Icon,
    Indicator,
    ResultCard,
    ResultText,
    ResultTextWrapper,
    StarContainer,
    Wrapper,
    ButtonContainer,
    StarIcon,
} from '../styles/Modal.style';
import { clock, indicator, star, turn as turnIcon } from '../assets';
import { Title } from '../ui/AnimateCardTitle';
import BtnPrimary from '../ui/BtnPrimary';
import { useNavigate } from 'react-router-dom';

import ReactDOM from 'react-dom';
import Timer from '../hooks/Timer';
import GenerateStar from '../hooks/GenerateStar';

const Modal = ({ turn, totalTime, setIsAllMatch, resetToDefault }) => {
    const navigate = useNavigate();

    const handleNewGame = () => {
        setIsAllMatch(false);
        resetToDefault();
    };

    const ModalContainer = (
        <Wrapper>
            <ResultCard>
                <Title>You Won !</Title>
                <StarContainer>
                    {GenerateStar(turn).map((item) => (
                        <StarIcon src={star} key={item} />
                    ))}
                </StarContainer>
                <ResultTextWrapper>
                    <ResultText>
                        <Icon img={turnIcon} />
                        <Indicator src={indicator} />
                        <Desc>{turn}</Desc>
                    </ResultText>
                    <ResultText>
                        <Icon img={clock} />
                        <Indicator src={indicator} />
                        <Desc>
                            {Timer(totalTime)}
                            {totalTime < 60 && 's'}
                        </Desc>
                    </ResultText>
                </ResultTextWrapper>
                <ButtonContainer>
                    <BtnPrimary
                        width='100px'
                        height='35px'
                        margin='0 .5rem'
                        onClick={() => navigate('/')}
                    >
                        Quit
                    </BtnPrimary>
                    <BtnPrimary
                        width='100px'
                        height='35px'
                        margin='0 .5rem'
                        onClick={handleNewGame}
                    >
                        New Game
                    </BtnPrimary>
                </ButtonContainer>
            </ResultCard>
        </Wrapper>
    );

    return ReactDOM.createPortal(
        ModalContainer,
        document.getElementById('modal')
    );
};

export default Modal;
