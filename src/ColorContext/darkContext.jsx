/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useReducer } from 'react';
import darkReducer from './darkReducer';

const INITIAL_STATE = {
    darkMode: false,
};

export const ColorContext = React.createContext(INITIAL_STATE);

export function ColorContextProvider({ children }) {
    const [state, dispatch] = useReducer(darkReducer, INITIAL_STATE);

    return (
        <ColorContext.Provider
            value={{
                darkMode: state.darkMode,
                dispatch,
            }}
        >
            {children}
        </ColorContext.Provider>
    );
}
