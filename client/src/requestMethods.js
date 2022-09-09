import axios from 'axios';

const BASE_URL = "https://e-commerce-backend.up.railway.app/api"
// const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWI3YWI1YjIxZjFkNDZkNGU1MjdiNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTgwMzg5NCwiZXhwIjoxNjYwMDYzMDk0fQ.s3W5TDbqKnfGpdBz7lKlqZH8OxQNnqpCkiwbNkkoyBA'
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.token;

export const publicRequest = axios.create({
    baseURL:BASE_URL
})
export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${ TOKEN }`}
})