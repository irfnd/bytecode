import axios from '../../helpers/axios'

const login = (data) => {
    return new Promise((resolve, reject) => {
        axios
        .post('login', data)
        .then((res) => {
            resolve(res.data)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

const jobSeeker = (data) => {
    return new Promise((resolve, reject) => {
        axios
        .post('register', data)
        .then((res) => {
            resolve(res.data)
        })
        .catch((err) => {
            reject(err)
        })
    })
}


export default { login, jobSeeker }