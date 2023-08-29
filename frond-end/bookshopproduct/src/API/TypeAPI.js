import { api } from "./API"

export let getListTypeAPI = () => {
    return api("GET", "types", null)
}