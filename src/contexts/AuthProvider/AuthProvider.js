import React, { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const User = { displayName: 'Batas Ali'}

    const authInfo = {User};
    
    return (
        <AuthContext.Provider value={ authInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;