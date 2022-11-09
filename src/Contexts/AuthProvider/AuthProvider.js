import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    useEffect(() => {
        return
    }, [])



    const authInfo = { user, createUser };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;