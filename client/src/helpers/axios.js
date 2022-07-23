import axios from "axios"
import Cookies from "js-cookie"

const interceptor = axios.create({
    baseURL: 'https://localhost:5000/'
})

interceptor.interceptors.request.use(
    function (config) {
        config.headers = {
            Authorization: `Bearer ${Cookies.get('token')}`
        }
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

export default interceptor