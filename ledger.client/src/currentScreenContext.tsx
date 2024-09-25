import React, { ReactNode } from 'react'
import { createContext, useContext, useState } from 'react';


type CurrentScreen = {
    value: string;
    updateValue: (newValue: string) => void;
}

const currentScreenContext = createContext<CurrentScreen | undefined>(undefined);


export const CurrentScreenProvider: React.FC<{children : ReactNode}> = ({ children }) => {
    const [value, setValue] = useState<string>("Title");
    const updateValue = (newString: string) => {
        setValue(newString);
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
