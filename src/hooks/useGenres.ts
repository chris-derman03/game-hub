import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    // Load games from rawg.io
    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient
            .get<FetchGenresResponse>("/genres", {signal: controller.signal})
            .then((response) => {
                setGenres(response.data.results);
                setLoading(false);
            })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, []);

    return {genres, error, isLoading };
};

export default useGenres;