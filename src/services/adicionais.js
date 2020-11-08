import axios from "./index";

export const getList = async () => {
    return await axios("mock/adicionais.json", {
        method: "get",
        headers: {
            "Content-type": "application/json"
        }
    });
}