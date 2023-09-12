gitimport React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Container, Heading, Stack, Flex, Text, Spinner, Grid, Button } from '@chakra-ui/react';
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AddNewPost from './components/addNewPost';
import { fetchPosts, deletePost } from '../api';
import { useMutation, useQueryClient } from "react-query";
import { useToast } from "@chakra-ui/react";


//https://gorest.co.in/public/v2/users/5124733/posts
const Home = () => {
    const { id } = useParams();
    const cache = useQueryClient();
    const toast = useToast();
    console.log('id passed via useParams hook ', id);
    const parsedId = parseInt(id);
    const navigate = useNavigate();

    const { data, isLoading, error } = useQuery(['posts', parsedId], () => fetchPosts(parsedId));

    const { isLoading: isMutating, mutateAsync, error: deleteError } = useMutation(['deletePost', parsedId], () =>

        deletePost(parsedId), {
        onError: (deleteError) => {
            toast({ status: "error", title: deleteError.message })

        },
        onSuccess: () => {
            cache.invalidateQueries("posts");
        }
    });

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

    const handlePrevClick = () => {
        if (parsedId > 1) {
            navigate(`/${parsedId - 1}`);
        }
    };

    return (
        <Container maxW="1300px" mt="4">
            <AddNewPost />
            <Flex justify="space-between" mb="4">
                <Button
                    colorScheme="red"
                    onClick={handlePrevClick}
                    disabled={parsedId === 1}
                    className={parsedId === 1 ? "disabled-button" : ""}
                >
                    Prev
                </Button>
                <Text>Current Page: {parsedId}</Text>
                <Button
                    colorScheme="green"
                    onClick={() => {
                        navigate(`/${parsedId + 1}`);
                    }}
                >
                    Next
                </Button>
            </Flex>
            {data.map((post) => (
                <Stack key={post.id} p="4"
                    boxShadow="md"
                    borderRadius="xl"
                    border="1px solid #ccc"
                    mb="4">
                    <Flex justify="flex-end">
                        <Button
                            size="sm"
                            isLoading={isMutating}
                            onClick={async () =>
                                await mutateAsync({ is: post.id })}
                        >
                            Delete
                        </Button>
                    </Flex>
                    <Link to={`/post/${post.id}`}>
                        <Stack p="4"
                            mb="4"
                            key={post.id}>
                            <Flex justify="space-between">
                                <Text>user id: {post.user_id}</Text>
                                <Text>Post id: {post.id}</Text>
                            </Flex>
                            <Heading fontSize="2xl">{post.title}</Heading>
                            <Text>{post.body}</Text>
                        </Stack>
                    </Link>
                </Stack>
            ))}
        </Container>
    )
}

export default Home;
