import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

/* 
    Generic Function for making a get request to the 
    API defined in "../services/api-client"

    Input: 
            endpoint: endpoint string to rawg.io api
    Output (State Hooks):    
            data: fetched data from endpoint
            error: boolean for if an error happened in the api call
            isLoading: boolean for loading status of api call              

    Example Usage: Get state hooks for list of games
        useData<Genre>('/games');
*/
const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    // Load games from rawg.io
    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient
            .get<FetchResponse<T>>(endpoint, {signal: controller.signal})
            .then((response) => {
                setData(response.data.results);
                setLoading(false);
            })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, []);

    return { data, error, isLoading };
};

export default useData;