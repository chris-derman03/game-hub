import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        // For the purposes of this demo site, I don't care that the API key is just in the source code
        key: "5f4b237cc89f4ab781b585ebc74595f6"
    }
})