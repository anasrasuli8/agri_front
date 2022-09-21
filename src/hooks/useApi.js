import axios from 'axios'
import { useCookies } from '@vueuse/integrations/useCookies'

const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        Accept: 'application/json',
    }
})

http.interceptors.request.use( async (config) => {
    const cookies = useCookies(['token'])

    if (cookies.get('token')) {
        config.headers.Authorization = `Bearer ${cookies.get('token')}`
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

export {
    http
}
