import React, { ReactNode, useEffect } from 'react'
import { createContext, useContext, useState } from 'react';
import { useTimeframeContext, TimeRange } from './TimeframeContext';


export class Transaction {
    date: string;
    product: string;
    units: number;
    amount: number;

    constructor(_date: string, _product: string, _units: number, _amount: number){
        this.date = _date;
        this.product = _product;
        this.units = _units;
        this.amount = _amount;
    }
}

class TransactionBuilder {
    private date: string;
    private product: string;
    private units: number;
    private amount: number;

    constructor() {
        this.date = "";
        this.product = "";
        this.units = 0;
        this.amount = 0;
    }

    setDate(date: string): this {
        this.date = date;
        return this;
    }
    setProduct(product: string): this {
        this.product = product;
        return this;
    }
    setUnits(units: number): this {
        this.units = units;
        return this;
    }
    setAmount(amount: number): this {
        this.amount = amount;
        return this;
    }
    build(): Transaction {
        return new Transaction(this.date, this. product, this.units, this.amount)
    }
}

type Transactions = {
    value: Transaction[] | undefined;
    updateValue: (newValue: Transaction[]) => void;
}

const transactionsContext = createContext<Transactions | undefined>(undefined);


export const TransactionsContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [value, setValue] = useState<Transaction[]>();
    const updateValue = (transactionData: Transaction[]) => {
        setValue(transactionData);
    }

    const timeframeContext = useTimeframeContext();
    useEffect(() => {
        if (timeframeContext) {
            const { value } = timeframeContext;
            switch (value) {
                case TimeRange.CurrentMonth:
                    setValue(GenerateDummyData(2));
                    break;
                case TimeRange.ThreeMonths:
                    setValue(GenerateDummyData(3));
                    break;
                case TimeRange.SixMonths:
                    setValue(GenerateDummyData(6));
                    break;
                case TimeRange.NineMonths:
                    setValue(GenerateDummyData(9));
                    break;
                case TimeRange.Year:
                    setValue(GenerateDummyData(12));
                    break;
                default:
                    setValue(GenerateDummyData(3));
                    break;
            }
        }
    }, [timeframeContext, timeframeContext.value])

    return (
        <transactionsContext.Provider value={{ value, updateValue }}>
            {children}
        </transactionsContext.Provider>
    );
};

export const useTransactionsContext = () => {
    const context = useContext(transactionsContext);
    if (context === undefined) {
        throw new Error('useTimeframeContext must be used inside TimerframeContextProvider!')
    }
    return context;
}

function GenerateDummyData(entries: number) {
    const data: Transaction[] = [];
    const yearDates: string[] = ["April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February", "March"];
    let dateIndex: number;
    for (let i = 0; i < entries; i++) {
        dateIndex = Math.floor(Math.random() * yearDates.length);
        data.push(
            new TransactionBuilder()
            .setProduct("Wood")
            .setDate(yearDates[dateIndex])
            .setUnits(Math.max(Math.floor(Math.random() * 50), 1))
            .setAmount(Math.max(Math.floor(Math.random() * 10), 1) * (Math.random() < 0.5 ? -1 : 1))
            .build()
        );
    }
    return data;
}