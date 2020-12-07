import React, { useEffect,useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {makeStyles }from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CommentIcon from '@material-ui/icons/Comment';
import MyPopup from '../util/MyPopup';

const useStyles2 = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      color: "red"
    }
  }));

function LikeButton({user, postId, likes, likesCount}) {

    const [liked, setLiked] = useState(false);

    const [color, setColor] = useState('primary');

  const classes = useStyles2();

  useEffect(() => {
    
        if (user && likes.find((like) => like.username === user.username)) {
            setLiked(true);
            console.log("liked", liked, "user", user);
          } else setLiked(false);    
  
}, [user, likes]);

  const [likePost] = useMutation(LIKE_POST_MUTATION, {
    variables: { postId: postId }
  });

  const likeButton = 
    liked ? (
      <Button size= "small"  color="white"  startIcon={<FavoriteIcon/>} variant="contained" className={classes.button}>
      </Button>
    ) : (
      <Button size= "small"  color="red"  startIcon={<FavoriteIcon/>} variant="contained" className={classes.button1}>
      </Button>
    ) ;

  return (
    <Button  as="div" onClick={likePost} >
         <MyPopup content={liked ? 'Unlike' : 'Like'}>{likeButton}</MyPopup>
         <label>
         {likesCount}
         </label>
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