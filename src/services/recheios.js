import axios from "./index";

export const getList = async () => {
    return await axios("mock/recheios.json", {
        method: "get",
        headers: {
            "Content-type": "application/json"
        }
    });
}