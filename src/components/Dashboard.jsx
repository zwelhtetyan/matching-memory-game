import React, { useEffect, useState } from 'react';
import {
    cat,
    cow,
    dinosaur,
    dog,
    elephant,
    koala,
    penguin,
    lion,
} from '../assets';
import { DashboardInner, DashboardWrapper } from '../styles/Dashboard.style';
import Card from './Card';
import Modal from './Modal';

import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
const animalsArr = [cat, dog, cow, dinosaur, elephant, penguin, lion, koala];

const Dashboard = ({ setTurn, setTotalTime, turn, totalTime }) => {
    //window resize
    const { width, height } = useWindowSize();

    //states
    const [animals, setAnimals] = useState(null);
    const [firstCard, setfirstCard] = useState(null);
    const [secondCard, setsecondCard] = useState(null);
    const [disable, setDisable] = useState();
    const [isAllMatch, setIsAllMatch] = useState(false);
    const [INTERVAL, SETINTERVAL] = useState(null);
    const [startTimer, setStartTimer] = useState(false);

    //generate random animals
    const generateRandomAnimals = () => {
        const modifiedArr = [...animalsArr, ...animalsArr]
            .map((animal) => ({
                src: animal,
                id: Math.random(),
            }))
            .sort(() => Math.random() - 0.5);
        return modifiedArr;
    };

    //shuffle card
    useEffect(() => {
        setAnimals(generateRandomAnimals());
    }, []);

    //recod time
    useEffect(() => {
        setTotalTime(0);
        setTurn(0);
        const timer = setInterval(() => {
            setTotalTime((prevtime) => prevtime + 1);
        }, 1000);

        SETINTERVAL(timer);
        return () => clearInterval(timer);
    }, [setTotalTime, startTimer, setTurn]);

    //isAllMatch
    useEffect(() => {
        setIsAllMatch(animals?.every((animal) => animal.match === true));
    }, [animals]);

    //stop game when allMatch
    useEffect(() => {
        if (isAllMatch) {
            clearInterval(INTERVAL);
        }
    }, [isAllMatch, INTERVAL]);

    //handle turn
    const handleTurn = (card) => {
        firstCard ? setsecondCard(card) : setfirstCard(card);
    };

    //check
    useEffect(() => {
        if (firstCard || secondCard) {
            setAnimals((prevAnimals) =>
                prevAnimals.map((animal) =>
                    animal === firstCard || animal === secondCard
                        ? { ...animal, singleDisable: true }
                        : animal
                )
            );
        }

        if (firstCard && secondCard) {
            setDisable(true);
            if (firstCard.src === secondCard.src) {
                setAnimals((prevAnimals) =>
                    prevAnimals.map((animal) =>
                        animal.src === firstCard.src
                            ? { ...animal, match: true }
                            : animal
                    )
                );
                resetAction();
            } else {
                setAnimals((prevAnimals) =>
                    prevAnimals.map((animal) => ({
                        ...animal,
                        singleDisable: animal.match ? true : false,
                    }))
                );
                setTimeout(() => resetAction(), 600);
            }
        }
    }, [firstCard, secondCard]);

    //reset action
    const resetAction = () => {
        setfirstCard(null);
        setsecondCard(null);
        setTurn((prevTurn) => prevTurn + 1);
        setDisable(false);
    };

    //reset turn and totalTime to default
    const resetToDefault = () => {
        setTurn(0);
        setTotalTime(0);
        setStartTimer((prev) => !prev);
        setAnimals((prevAnimals) =>
            prevAnimals.map((animal) => ({ ...animal, match: false }))
        );
        setAnimals(generateRandomAnimals());
    };

    return (
        <DashboardWrapper>
            <DashboardInner>
                {animals?.map((animal) => (
                    <Card
                        animal={animal}
                        key={animal.id}
                        handleTurn={handleTurn}
                        disable={disable}
                        flipped={
                            animal.id === firstCard?.id ||
                            animal.id === secondCard?.id ||
                            animal.match
                        }
                    />
                ))}
            </DashboardInner>

            {isAllMatch && (
                <>
                    <Confetti
                        width={width}
                        height={height / 2 - 30}
                        style={{
                            background: 'transparent',
                            position: 'fixed',
                            zIndex: '100',
                        }}
                    />
                    <Modal
                        turn={turn}
                        totalTime={totalTime}
                        setIsAllMatch={setIsAllMatch}
                        resetToDefault={resetToDefault}
                    />
                </>
            )}
        </DashboardWrapper>
    );
};

export default Dashboard;
