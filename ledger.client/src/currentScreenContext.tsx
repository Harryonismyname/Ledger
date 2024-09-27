import React, { ReactNode } from 'react'
import { createContext, useContext, useState } from 'react';
import TitleScreen from './TitleScreen.tsx';


type CurrentScreen = {
    value: ReactNode;
    updateValue: (newValue: ReactNode) => void;
}

const currentScreenContext = createContext<CurrentScreen | undefined>(undefined);


export const CurrentScreenProvider: React.FC<{children : ReactNode}> = ({ children }) => {
    const [value, setValue] = useState<ReactNode>(TitleScreen);
    const updateValue = (newScreen: ReactNode) => {
        setValue(newScreen);
    }
    return (
        <currentScreenContext.Provider value={{value, updateValue}}>
            {children}
        </currentScreenContext.Provider>
    );
};

export const useCurrentScreenContext = () => {
    const context = useContext(currentScreenContext);
    if (context === undefined) {
        throw new Error('useCurrentScreenContext must be used inside CurrentScreenProvider!')
    }
    return context;
}
