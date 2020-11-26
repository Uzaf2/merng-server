  import React, {useState, useEffect  , useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom";

const font =  "'Merriweather', serif";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "black",
    fontFamily: font
  },
  introText: {
    fontFamily: font,
    color: "black",
    fontSize: 12
    }
}));


function MenuBar (){

  const [activeItem, setActiveItem] = useState('home');
 
  const history = useHistory();

  // function to detect changes in the state of the application
  useEffect(() => {

    history.push(`/${activeItem}`);
  });

  const classes = useStyles();
    return (
      
<AppBar position="static"style={{ background: '#FFFFFF' }}>
  <Toolbar>
    <IconButton edge="start"
     className={classes.menuButton} 
     color="default" 
     aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" 
    className={classes.title}>
      Posts
    </Typography>
    <Button color="default" onClick={()=>setActiveItem('') }>
    <Typography variant="h6" className={classes.introText}>Home</Typography> 
    </Button>
    <Button color="default" onClick={()=>setActiveItem('login')}>
    <Typography variant="h6" className={classes.introText}>Login</Typography> 
    </Button>
    <Button color="default" onClick={()=>setActiveItem('register')}>
    <Typography variant="h6" className={classes.introText}>Register</Typography> 
    </Button>
  </Toolbar>
</AppBar>
  )
}

export default MenuBar;

