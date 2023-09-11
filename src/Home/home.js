import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Container, Heading, Stack, Flex, Text, Spinner, Grid, Button } from '@chakra-ui/react';
import { useParams, Link   } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AddNewPost from './components/addNewPost';

const Home = () => {
    const fetchPosts = async (id) => {
        try {
           // const { data } = await axios.get(`https://gorest.co.in/public/v2/users/5124733/posts?page=${id}`);
            const { data } = await axios.get(`https://gorest.co.in/public/v2/posts?page=${id}`);     
            console.log('data being fetched after fetchPosts ', data)
            return data;
        } catch (error) {
            throw Error('Could not fetch posts');
        }
    }

    const { id } = useParams(); 
    console.log('id passed via useParams hook ', id);
    const parsedId = parseInt(id);
    const navigate = useNavigate();

    const { data, isLoading, error } = useQuery(['posts', parsedId], () => fetchPosts(parsedId));

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
                <Link key={post.id} to={`/post/${post.id}`}>
                    <Stack p="4"
                        boxShadow="md"
                        borderRadius="xl"
                        border="1px solid #ccc"
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
            ))}
        </Container>
    )
}

export default Home;
