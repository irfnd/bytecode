import axios from "axios"
import Cookies from "js-cookie"

const interceptor = axios.create({
    baseURL: 'http://localhost:8000'
})

interceptor.interceptors.request.use(
    function (config) {
        const Config = config;
        Config.headers = {
            Authorization: `Bearer ${Cookies.get('token')}`
        }
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

interceptor.interceptors.request.use(
    function (config) {
        return config
    }
)

export default interceptor