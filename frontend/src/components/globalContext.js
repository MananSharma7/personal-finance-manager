import React, { useContext, createContext, useState } from "react";
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);

    //calculate incomes
    const addIncome = async (income) => {
        await axiosInstance.post(`${axiosInstance.defaults.baseURL}add-income`, income)
            .catch((err) => {
                setError(err.response.data.message)
            })
        getIncomes();
    }

    const getIncomes = async () => {
        const response = await axiosInstance.get(`${axiosInstance.defaults.baseURL}get-income`);
        setIncomes(response.data);
    }

    const deleteIncome = async (id) => {
        await axiosInstance.delete(`${axiosInstance.defaults.baseURL}delete-income/${id}`);
        getIncomes();
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) => {
            totalIncome = totalIncome + income.amount
        })
        return totalIncome;
    }


    //calculate incomes
    const addExpense = async (income) => {
        await axiosInstance.post(`${axiosInstance.defaults.baseURL}add-expense`, income)
            .catch((err) => {
                setError(err.response.data.message)
            });
        getExpenses();
    }

    const getExpenses = async () => {
        const response = await axiosInstance.get(`${axiosInstance.defaults.baseURL}get-expense`);
        setExpenses(response.data);
    }

    const deleteExpense = async (id) => {
        await axiosInstance.delete(`${axiosInstance.defaults.baseURL}delete-expense/${id}`);
        getExpenses();
    }

    const totalExpenses = () => {
        let totalIncome = 0;
        expenses.forEach((income) => {
            totalIncome = totalIncome + income.amount;
        })

        return totalIncome;
    }


    const totalBalance = () => {
        return totalIncome() - totalExpenses();
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses];
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
        })

        return history.slice(0, 5);
    }


    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}