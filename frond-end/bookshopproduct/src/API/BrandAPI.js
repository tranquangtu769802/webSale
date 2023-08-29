import { api } from "./API"

export let getListBrandAPI = () => {
    return api("GET", "brands", null)
}