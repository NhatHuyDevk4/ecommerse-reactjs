
import { useState } from 'react';
import { createContext } from 'react';
import { getCard } from '@/apis/cartService';

export const SideBarContext = createContext();

export const SidebarProvider = ({ children }) => {
    //dùng để mở sidebar
    const [isOpen, setIsOpen] = useState(false);

    // dùng cho sidebar components
    const [type, setType] = useState('');

    const [listProductCart, setListProductCart] = useState([]);

  

    const handleGetListProductCart = (userId, type) => {
        if (userId && type === 'cart') { // nếu type là cart thì mới gọi api 
            getCard(userId)
                .then((res) => {
                    setListProductCart(res.data.data);
                })
                .catch((err) => {
                    setListProductCart([]); // nếu lỗi thì set list rỗng
                });
        }
    };

    const value = {
        isOpen,
        setIsOpen,
        type,
        setType,
        handleGetListProductCart,
        listProductCart
    };

    return (
        <SideBarContext.Provider value={value}>
            {children}
        </SideBarContext.Provider>
    );
};
