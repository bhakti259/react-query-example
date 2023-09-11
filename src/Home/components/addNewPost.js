import React from 'react';
import axios from 'axios';
import { Heading, Stack } from '@chakra-ui/react'
import { Formik, Form } from "formik";
import { InputControl, SubmitButton, TextareaControl } from "formik-chakra-ui";
import { useMutation } from 'react-query';


///users/2974/posts
//users/5124733/posts
const AddNewPost = () => {
    const addNewPost = async({ title, body }) => {
        try {
            const { data } = await axios.post(`https://gorest.co.in/public/v2/users/2974/posts`, {
                title, body
            },{
                headers: {
                    Authorization: "Bearer d0a0197b6636ef3575fd06646381983572597c7ca2f7b30dccff6f59078b96a6"
                }
            });
            console.log('data returned after post ', data);
            return data;
        } catch (error) {
            throw Error(error.response.statusText)
        }
    }
    const {isLoading, data, error, mutateAsync} = useMutation ('addNewPost', addNewPost)
    return (
        <div>
            <Formik initialValues={{title: "", body: ""}}
                onSubmit={async(values) => {
                    await mutateAsync({ title: values.title, body: values.body})
                    console.log('values on adding new post ', values)
                }}>
                <Form>
                    <Stack my="4">
                        <Heading textAlign="center">Add New Post</Heading>
                        <InputControl name="title" label="title"></InputControl>
                        <TextareaControl name="body" label="content" />
                        <SubmitButton>Add Post</SubmitButton>
                    </Stack>
                </Form>
            </Formik>
        </div>
    )
}
export default AddNewPost;