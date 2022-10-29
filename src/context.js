import React, { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';

export const API = "http://demo2211087.mockable.io/mock";

const AppContext = createContext();

 const AppProvider = ({ children }) => {
    const [isloading, setIsloading] = useState(true);
    const [company, setCompany] = useState([]);

    const getCompanies = async (url) => {
        try {
            setIsloading(true);
            const { data } = await axios.post(url);
            setCompany(data)
            setIsloading(false);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCompanies(`${API}`)
    }, []);

    return (<AppContext.Provider value={{ isloading, setIsloading, company, setCompany, getCompanies }}>{children}</AppContext.Provider>)
};

const useGlobalContext = () => {
    return useContext(AppContext)
};

export { AppProvider, useGlobalContext };