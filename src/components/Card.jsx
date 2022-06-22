import React from 'react';
import { Back, CardWrapper, Front, InnerCard } from '../styles/Card.style';

const Card = ({ animal, handleTurn, flipped, disable }) => {
    return (
        <CardWrapper flipped={flipped}>
            <InnerCard
                onClick={() => !disable && handleTurn(animal)}
                disabled={animal.singleDisable}
            >
                <Front src={animal.src} />
                <Back as='div' />
            </InnerCard>
        </CardWrapper>
    );
};

export default Card;
