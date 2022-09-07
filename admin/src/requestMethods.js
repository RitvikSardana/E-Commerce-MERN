import axios from 'axios';

const BASE_URL = "http://localhost:1337/api"
const TOKEN = (JSON.parse(JSON.parse(localStorage.getItem('persist:root'))?.user)?.currentUser?.token) || "";
// const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWI3YWI1YjIxZjFkNDZkNGU1MjdiNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTg0Njc5NCwiZXhwIjoxNjYyMTA1OTk0fQ.AOIDepO0i7XHOWNgj4ORZqzWinGkm5HtMLY-JTwhhFQ'


export const publicRequest = axios.create({
    baseURL:BASE_URL
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})