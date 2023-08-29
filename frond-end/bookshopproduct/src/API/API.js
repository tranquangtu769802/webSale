import axios from "axios"

const axiosClient = axios.create({
    baseURL : "http://localhost:8075/api/v1/",
    headers: {
        "content-type": "application/json",
    }
})

// ham xu ly call api: 
// methor: phuong thuc get post put delete
// endpoint: duong link mo rong: duong link co ban + duong link mo rong
// payload: du lieu day kem khi call api : createNewProduct(productNew)
export const api = (method_param, endpoint_param, payload_param) => {
    return axiosClient(endpoint_param, { method: method_param, data: payload_param })
        .then((response) => {
            //   console.log("api");
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
};