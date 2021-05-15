import { request } from "../utils/RequestWrapper";

export const getItems = () => {
    return request({
        url: "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian",
        method: "GET",
    });
};
