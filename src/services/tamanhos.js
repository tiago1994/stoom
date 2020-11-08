import axios from "./index";

export const getList = async () => {
    return await axios("mock/tamanhos.json", {
        method: "get",
        headers: {
            "Content-type": "application/json"
        }
    });
}