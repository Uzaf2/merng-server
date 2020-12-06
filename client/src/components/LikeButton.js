import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {makeStyles }from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CommentIcon from '@material-ui/icons/Comment';
const useStyles2 = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

function LikeButton({user, postId, likes, likesCount}) {


  const classes = useStyles2();
  // This will changed the colour of the like button
  const [liked, setLiked] = useState(false);


  const [likePost] = useMutation(LIKE_POST_MUTATION, {
    variables: { postId: postId }
  });


 
  return (
    <Button  size="small"  color="white"  startIcon={<FavoriteIcon/>}
     variant="contained" className={classes.button} onClick={likePost}>
        {likesCount}
    </Button>
  );
}

const LIKE_POST_MUTATION = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      id
      likes {
        id
        username
      }
      likeCount
    }
  }
`;

export default LikeButton;