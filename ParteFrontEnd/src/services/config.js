import axios from 'axios'

const TOKEN = localStorage.token;

export const http = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Authorization': 'Bearer ' + TOKEN
    },
});

