import React from 'react';
import { createContext, useState } from 'react';

const Context = createContext();

const ModalContext = ({children}) => {
    const [showModalDefault, setShowModalDefault] = useState(false);
    
    return (
        <Context.Provider value={{showModalDefault, setShowModalDefault}}>
            {children}
        </Context.Provider>
    )
}

export { ModalContext };
export default Context;
