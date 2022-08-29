import axios from 'axios';

const BASE_URL = "http://localhost:1337/api"
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).currentUser).token || "";
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWI3YWI1YjIxZjFkNDZkNGU1MjdiNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTgwMzg5NCwiZXhwIjoxNjYwMDYzMDk0fQ.s3W5TDbqKnfGpdBz7lKlqZH8OxQNnqpCkiwbNkkoyBA'

export const publicRequest = axios.create({
    baseURL:BASE_URL
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})