import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Image} from 'semantic-ui-react';
import moment from 'moment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import {makeStyles }from '@material-ui/core/styles';

const font =  "'Merriweather', serif";

const useStyles = makeStyles({
    gridContainer: {
     borderColor:"black",
     borderWidth: 0.1,
     border: `solid`,
     width: "600px",
     height: "200px",
     marginTop: "20px"
    },
    heading: {
      fontFamily: font,
      color: "black",
      fontSize: 12,
      marginTop: "0.1px",
      float: "top",
      display: "flex"
      },
      cardActions: {
        borderTop:`solid`,
        borderColor:"black",
        borderWidth:0.1
      },
  
      bodyText: {
        fontFamily: font,
        color: "black",
        fontSize: 12
        },
        imageSize:{
          width:"50px",
          height: "50px",
          float: "right"
        }
  });

  const useStyles2 = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

function SinglePost(props){
    const postId = props.match.params.postId;
    const styles = useStyles();
    const classes = useStyles2();

    const { data} = useQuery(FETCH_POST_QUERY, {
        variables: {
          postId
        }
      });

      
      let postMarkup;

      if (data ===undefined ) {
        postMarkup = <p>Loading post..</p>;
      } else {

        const {
          id,
          body,
          creationTime,
          username,
          comments,
          likes,
          likeCount,
          commentCount
        } = data.getPost;
       
        postMarkup = (
            <Card className={styles.gridContainer}>
            <CardActionArea > 
            
             <CardContent>
             <Image float="right" size="mini" src='http://semantic-ui.com/images/avatar2/large/molly.png' className={styles.imageSize}/>
               <Typography gutterBottom variant="h5" component="h2">
               </Typography>
               <Typography variant="body2" color="textSecondary" component="p" className={styles.heading}>
              <h3>{id}</h3>
               </Typography>
               <Typography variant="body2" color="textSecondary" component="p" className={styles.bodyText}>
               {body}
                </Typography>
               <Typography variant="body2" color="textSecondary" component="p" className={styles.bodyText}>
               {moment(props.creationTime).fromNow(true)} 
               </Typography>
             </CardContent>
            </CardActionArea>

            <CardActions className={styles.cardActions}>
            <Button size="small" variant="contained"   className={classes.button} startIcon={<FavoriteIcon/>} >
            </Button>
            <Button size="small" variant="contained"   className={classes.button} startIcon={<CommentIcon/>}  >
            </Button>
            <Button size="small" variant="contained"   className={classes.button} startIcon={<DeleteIcon/>}  >
            </Button>
            </CardActions>

            </Card>
            );
        }
    return postMarkup;

}

const SUBMIT_COMMENT_MUTATION = gql`
  mutation($postId: String!, $body: String!) {
    createComment(postId: $postId, body: $body) {
      id
      comments {
        id
        body
        creationTime
        username
      }
      commentCount
    }
  }`;

const FETCH_POST_QUERY = gql`
  query($postId: ID!) {
    getPost(postId: $postId) {
      id
      body
      creationTime
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        creationTime
        body
      }
    }
  }`;

export default  SinglePost;