import axios from 'axios'
const api = axios.create({
    baseURL: 'https://cws.in.net/iron_gate/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});
export default api;