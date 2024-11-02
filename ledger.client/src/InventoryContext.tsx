import React, { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';
import Batch from "./DataStructures/Batch.tsx";

type Inventory = {
    value: Batch[] | undefined;
    updateValue: (newValue: Batch[]) => void;
}

const inventoryContext = createContext<Inventory | undefined>(undefined);

export const InventoryContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [value, setValue] = useState<Batch[]>();
    const updateValue = (batchData: Batch[]) => {
        setValue(batchData);
    }
    return (
        <inventoryContext.Provider value={{value, updateValue} }>
            {children }
        </inventoryContext.Provider>
    )
}

export const useInventoryContext = () => {
    const context = useContext(inventoryContext);
    if (context === undefined) {
        throw new Error("useInventoryContext must be used inside InventoryContextProvider!");
    }
    return context;
}