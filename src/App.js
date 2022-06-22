import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Action from './components/Action';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Welcome from './components/Welcome';
import GlobalStyles from './GlobalStyles';

const App = () => {
    const [turn, setTurn] = useState(0);
    const [totalTime, setTotalTime] = useState(0);

    return (
        <>
            <GlobalStyles />
            <Header />
            <Routes>
                <Route path='/' element={<Welcome />} />
                <Route
                    path='/game'
                    element={
                        <>
                            <Action turn={turn} totalTime={totalTime} />
                            <Dashboard
                                setTurn={setTurn}
                                setTotalTime={setTotalTime}
                                turn={turn}
                                totalTime={totalTime}
                            />
                        </>
                    }
                />
            </Routes>
        </>
    );
};

export default App;
