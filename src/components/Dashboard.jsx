import React, { useState } from 'react';
import {
    cat,
    cow,
    dinosaur,
    dog,
    elephant,
    koala,
    penguin,
    turtle,
} from '../assets';

const animalsArr = [cat, dog, cow, dinosaur, elephant, penguin, turtle, koala];

const Dashboard = () => {
    const [animals, setAnimals] = useState(null);

    //generate random animals
    const generateRandomAnimals = () => {
        return animalsArr
            .map((animal) => ({ src: animal, match: false, id: Math.random() }))
            .sort(() => Math.random() - 0.5);
    };

    return <div></div>;
};

export default Dashboard;
