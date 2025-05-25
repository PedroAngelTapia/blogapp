import axios from 'axios';

const API_URL = 'http://localhost:8080/api/posts';

export const getPosts = () => {
    return axios.get(API_URL);
};

export const getPostById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

export const createPost = (postData) => {
    return axios.post(API_URL, postData);
};

export const updatePost = (id, postData) => {
    return axios.put(`${API_URL}/${id}`, postData);
};

