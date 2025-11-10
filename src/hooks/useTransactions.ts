import { useState } from "react";
import { fetchTransactions } from "../api/fetchTransactions";

export const useTransactions = () => {
    const [loading, setLoading] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [error, setError] = useState("");

    const getTransactions = async (address: string) => {
        setLoading(true);
        setError("");
        try {
            const data = await fetchTransactions(address);
            setTransactions(data);
        } catch (e) {
            setError("Failed to fetch transactions");
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, transactions, getTransactions };
};
