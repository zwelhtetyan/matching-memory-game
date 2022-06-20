import React from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import GlobalStyles from './GlobalStyles';

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Dashboard />
        </>
    );
};

export default App;
