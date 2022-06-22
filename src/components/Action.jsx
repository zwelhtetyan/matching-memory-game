import React from 'react';
import { useNavigate } from 'react-router-dom';
import { clock, star, turn as turnIcon } from '../assets';
import GenerateStar from '../hooks/GenerateStar';
import Timer from '../hooks/Timer';
import {
    ActionWrapper,
    Icon,
    Wrapper,
    Action as ActionElem,
} from '../styles/Action.style';
import BtnPrimary from '../ui/BtnPrimary';

const Action = ({ turn, totalTime }) => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <ActionWrapper>
                <ActionElem width='95px'>
                    {GenerateStar(turn).map((item) => (
                        <Icon src={star} key={item} />
                    ))}
                </ActionElem>
                <ActionElem width='62.703px'>
                    <Icon src={turnIcon} /> <span>{turn}</span>
                </ActionElem>
                <ActionElem width='85.594px'>
                    <Icon src={clock} /> <span>{Timer(totalTime)}</span>
                </ActionElem>
            </ActionWrapper>
            <BtnPrimary
                width='70px'
                height='30px'
                margin='0'
                onClick={() => navigate('/')}
            >
                Quit
            </BtnPrimary>
        </Wrapper>
    );
};

export default Action;
