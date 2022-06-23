import React from 'react';
import {
    Back,
    Card as CardWrapper,
    Front,
    InnerCard,
} from '../styles/Card.style';

const Card = ({ animal, handleTurn, flipped, disable }) => {
    return (
        <CardWrapper
            onClick={() => !disable && handleTurn(animal)}
            disabled={animal.singleDisable}
        >
            <InnerCard>
                <Front src={animal.src} alt='animal_photo' flipped={flipped} />
                <Back flipped={flipped} />
            </InnerCard>
        </CardWrapper>
    );
};

export default Card;
