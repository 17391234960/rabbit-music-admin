import axios from "axios";

const baseURL = import.meta.env.VITE_API_HOST
console.log('baseURL', baseURL)

const instance = axios.create({
    baseURL
})
// axios.defaults.withCredentials=true
// axios.defaults.crossDomain=true
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
const { get, post, put } = instance

export {get, post, put}