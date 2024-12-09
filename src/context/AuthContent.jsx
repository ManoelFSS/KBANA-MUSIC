import React, { createContext, useEffect, useState } from 'react';
import queryString from 'query-string';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
    const [token, setToken] = useState(null);

    useEffect(() => {
        const hash = queryString.parse(window.location.hash);
        if (hash.access_token) {
        setToken(hash.access_token);
        window.history.replaceState({}, null, '/'); // Remove o token da URL
        }
    }, []);

    return (
        <AuthContext.Provider value={{ token }}>
        {children}
        </AuthContext.Provider>
    );
};
