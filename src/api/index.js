import React from 'react';
import axios from 'axios';

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_URL, // Your API's base URL
  timeout: 5000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json', // Set default content type
    'Authorization': 'Bearer d0a0197b6636ef3575fd06646381983572597c7ca2f7b30dccff6f59078b96a6', // Set default authorization token if needed
  },
});

const customAxios_v1 = axios.create({
    baseURL: process.env.REACT_APP_URL_V1, // Your API's base URL
    timeout: 5000, // Request timeout in milliseconds
    headers: {
      'Content-Type': 'application/json', // Set default content type
      'Authorization': 'Bearer d0a0197b6636ef3575fd06646381983572597c7ca2f7b30dccff6f59078b96a6', // Set default authorization token if needed
    },
  });

export const addNewPost = async ({ title, body }) => {
    try {
        const { data } = await customAxios.post(
            'users/5124733/posts',
            {
                title,
                body,
            },
            {
            headers: {
                'Content-Type': 'application/json', // Set default content type
                'Authorization': 'Bearer d0a0197b6636ef3575fd06646381983572597c7ca2f7b30dccff6f59078b96a6', // Set default authorization token if needed
              },
            }
        );
        console.log('data returned after post ', data);
        return data;
    } catch (error) {
        throw new Error(error.response.statusText);
    }
};

export const updatePost = async ({ title, body, id }) => {
    try {
        const { data } = await customAxios.patch(
            `/posts/${id}`,
            {
                title,
                body,
            },
            { headers: {
                'Content-Type': 'application/json', // Set default content type
                'Authorization': 'Bearer d0a0197b6636ef3575fd06646381983572597c7ca2f7b30dccff6f59078b96a6', // Set default authorization token if needed
                },
            }
        );
        console.log('data returned after update post ', data);
        return data;
    } catch (error) {
        throw new Error(error.response.statusText);
    }
};


export const fetchPosts = async (id) => {
    try {
        const { data } = await customAxios.get(`/users/5132757/posts?timestamp=${Date.now()}`);
        //const { data } = await customAxios.get(`posts?page=${id}`);     
        console.log('data being fetched after fetchPosts ', data)
        return data;
    } catch (error) {
        throw Error('Could not fetch posts');
    }
}

export const deletePost = async ({ id }) => {
    try {
      const { data } = await customAxios.delete(
        `posts/${id}`,
  
        { headers: {
            'Content-Type': 'application/json', // Set default content type
            'Authorization': 'Bearer d0a0197b6636ef3575fd06646381983572597c7ca2f7b30dccff6f59078b96a6', // Set default authorization token if needed
            },
        }
      );
      return data;
    } catch (error) {
      throw Error(error.response.statusText);
    }
  };

export const fetchPost = async (id) => {
    //https://gorest.co.in/public/v1/posts/67955
    try {
        const { data } = await axios.get(`https://gorest.co.in/public/v1/posts/${id}`);
        return data;
    } catch (error) {
        throw Error('Could not fetch post with id ', id);
    }
}