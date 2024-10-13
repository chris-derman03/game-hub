// import useData from "./useData";

import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

// API Call implementation
// const useGenres = () => useData<Genre>('/genres');

// Static implementation because genres will likely not be changing often
const useGenres = () => ({data: genres, isLoading: false, error: null})

export default useGenres;