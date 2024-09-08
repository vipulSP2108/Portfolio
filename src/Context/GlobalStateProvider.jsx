import React, { createContext, useState } from 'react';

export const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
    const [oneGap, setOneGap] = useState(0);
    const [oneCellHeight, setOneCellHeight] = useState(0);
    const [oneCellWidth, setOneCellWidth] = useState(0);

    return (
        <GlobalStateContext.Provider value={{ oneGap, setOneGap, oneCellHeight, setOneCellHeight, oneCellWidth, setOneCellWidth }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

export default GlobalStateProvider;
