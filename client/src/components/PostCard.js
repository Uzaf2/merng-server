import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {Image} from 'semantic-ui-react';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CommentIcon from '@material-ui/icons/Comment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {makeStyles }from '@material-ui/core/styles';

const font =  "'Merriweather', serif";

const useStyles = makeStyles({
  gridContainer: {
   borderColor:"black",
   borderWidth: 0.1,
   border: `solid`,
   width: "300px",
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

function PostCard(props){

  const styles = useStyles();
  return (
  
<Card className={styles.gridContainer}>
<CardActionArea > 

 <CardContent>
 <Image float="right" size="mini" src='http://semantic-ui.com/images/avatar2/large/molly.png' className={styles.imageSize}/>
   <Typography gutterBottom variant="h5" component="h2">
   </Typography>
   <Typography variant="body2" color="textSecondary" component="p" className={styles.heading}>
  <h3>{props.username}</h3>
   </Typography>
   <Typography variant="body2" color="textSecondary" component="p" className={styles.bodyText}>
   {moment(props.creationTime).fromNow(true)} ago
    </Typography>
   <Typography variant="body2" color="textSecondary" component="p" className={styles.bodyText}>
   {props.body}
   </Typography>
 </CardContent>
</CardActionArea>
<CardActions className={styles.cardActions}>
 <Button size="small" >
 <FavoriteIcon className={styles.iconActions}/>
 </Button>
 <Button size="small">
   <CommentIcon />
 </Button>
</CardActions>
</Card>
  )
}


export default PostCard;