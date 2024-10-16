import { useState } from 'react';
import { createContext } from 'react';

export const SideBarContext = createContext();

export const SidebarProvider = ({ children }) => {
    //dùng để mở sidebar
    const [isOpen, setIsOpen] = useState(false);

    // dùng cho sidebar components
    const [type, setType] = useState('');

    const value = { isOpen, setIsOpen, type, setType };

    return (
        <SideBarContext.Provider value={value}>
            {children}
        </SideBarContext.Provider>
    );
};
