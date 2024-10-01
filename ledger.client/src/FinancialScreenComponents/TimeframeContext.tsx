import React, { ReactNode } from 'react'
import { createContext, useContext, useState } from 'react';


export enum TimeRange
{
    CurrentMonth,
    ThreeMonths,
    SixMonths,
    NineMonths,
    Year,
}

type Timeframe = {
    value: TimeRange;
    updateValue: (newValue: TimeRange) => void;
}

const timeframeContext = createContext<Timeframe | undefined>(undefined);


export const TimeframeContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [value, setValue] = useState<TimeRange>(TimeRange.SixMonths);
    const updateValue = (newScreen: TimeRange) => {
        setValue(newScreen);
    }
    return (
        <timeframeContext.Provider value={{ value, updateValue }}>
            {children}
        </timeframeContext.Provider>
    );
};

export const useTimeframeContext = () => {
    const context = useContext(timeframeContext);
    if (context === undefined) {
        throw new Error('useTimeframeContext must be used inside TimerframeContextProvider!')
    }
    return context;
}