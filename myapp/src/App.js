import React from "react";
import {Container,Typography,Grow,AppBar,Grid} from '@material-ui/core'
import memories from './images/memories.png' 
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './components/styles'
function App() {
  const classes=useStyles()
  return (
    <div>
<Container maxWidth="lg">
  <AppBar className={classes.appBar} position="static" color="inherit">
    <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
    <img  className={classes.image} src={memories} alt="memories" height="60" />
  </AppBar>
  <Grow in>
    <Container>
      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid xs="12" sm="7">
        <Posts/>
        </Grid>
        <Grid xs="12" sm="4">
        <Form/>
        </Grid>

      </Grid>
    </Container>
  </Grow>
  </Container>      
    </div>
  );
}

export default App;
