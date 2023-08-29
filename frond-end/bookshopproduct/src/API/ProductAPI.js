import { api } from "./API"


export let getListProductAPI = () => {
    return api("GET", "products", null)
}

//todo ham xu ly search
export let getListProductAPISearch = (search) => {  // search= 2
    return api("GET", "products?search=" + search , null)
}

//todo ham xu ly filter
export let getListProductAPIFilter = (brand) => {  // search= 2
    return api("GET", "products?brand=" + brand , null)
}

//todo ham xu ly sort
export let getListProductAPISort = (sort) => {  // search= 2
    return api("GET", "products?sort=" + sort , null)
}

//todo pagination
export let getListAPIPagination = (currentPage, size) => {
    return api("GET", "products?page=" + currentPage +"&size", null );
  };

export let addNewProductAPI = (productNew) => {
    return api("POST", "products", productNew)

}

// export let getProductByIdAPI = (id) => {
//     return api("GET", "products/" + id, null)

// }

export let updateProductAPI = (productUpdate) => {
    return api("PUT", "products/" + productUpdate.id, productUpdate)

}

export let deleteProductAPI = (id) => {
    return api("DELETE", "products/" + id, null)

}