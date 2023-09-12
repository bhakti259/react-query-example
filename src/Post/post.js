import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Container, Heading, Stack, Flex, Text, Spinner, Grid } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { fetchPost } from '../api';
import AddNewPost from '../Home/components/addNewPost';

const Post = () => {
    const { id } = useParams(); 
    const { data, isLoading, error } = useQuery(['post', parseInt(id)], () => fetchPost(id));

    if (isLoading) {
        // Handle loading state
        return (
            <Grid placeItems='center' height="100vh">
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
                Loading...
            </Grid>
        );
    }

    if (error) {
        // Handle error state
        return (
            <Grid placeItems='center' height="100vh">
                {error.message}
            </Grid>
        );
    }

    return (
        <Container maxW="1300px" mt="4">
            <AddNewPost isUpdate={true} id={data.data.id}/>
            <Flex justify="space-between" mb="4">
                <Text>Current Post id: {id}</Text>
            </Flex>
                <Stack p="4"
                    boxShadow="md"
                    borderRadius="xl"
                    border="1px solid #ccc"
                    mb="4"
                    key={data.data.id}>
                    <Flex justify="space-between">
                        <Text>user id: {data.data.user_id}</Text>
                        <Text>Post id: {data.data.id}</Text>
                    </Flex>
                    <Heading fontSize="2xl">{data.data.title}</Heading>
                    <Text>{data.data.body}</Text>
                </Stack>
        </Container>
    )
}

export default Post;
