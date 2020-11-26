import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import PostCard from '../components/PostCard';
import { FETCH_POSTS_QUERY } from '../util/graphql';

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";


function Home() {
    const { loading, data:{ getPosts: posts} } = useQuery(FETCH_POSTS_QUERY);
    return (
        <Box p={(2, 4)}>
            
            <Grid container justify="center" spacing={2}>
                {posts.map(data => (
                    <Grid key={data.id} item xs={4}>
                         <PostCard id={data.id} body={data.body} 
                         username={data.username}
                          creationTime={data.creationTime}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Home;