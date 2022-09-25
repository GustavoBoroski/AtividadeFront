import axios from 'axios'

const TOKEN = localStorage.token;

export const http = axios.create({
    baseURL: 'https://progamerapi.azurewebsites.net/api',
    headers: {
        'Authorization': 'Bearer ' + TOKEN
    },
});

