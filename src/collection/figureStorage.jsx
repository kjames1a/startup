import React, { createContext, useContext, useState } from 'react';

const figureStorageContext = createContext();

export const FigureStorageProvider = ({ children }) => {
    const [collection, setCollection] = useState([]);

    const addFigure = (figure) => {
        setCollection((prev) => [...prev, figure]);
    };

    const removeFigure = (figureName) => {
        setCollection((prev) => prev.filter((_, i) => i !== indexToRemove));
    };

    return (
        <figureStorageContext.Provider value={{ collection, addFigure, removeFigure }}>
            {children}
        </figureStorageContext.Provider>
    );
};

export const useCollection = () => useContext(figureStorageContext);