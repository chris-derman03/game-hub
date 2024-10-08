import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "5f4b237cc89f4ab781b585ebc74595f6"
    }
})