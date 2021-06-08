import React from 'react'
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline,
Grid, Toolbar, Container } from '@material-ui/core'
import {PhotoCamera, Photo } from '@material-ui/icons'

import useStyles from './styles'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera className={classes.icon}/>
          <Typography variant='h6'> Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth='sm' >
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
              Photo Album
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Hello everyone this is a photo album And i'm trying to make this sentence as long as possible so we can see how does it look like on screen
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) =>(
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image='https://source.unsplash.com/random'
                    title='Image Title'
                  />
                  <CardContent className={classes.CardContent}>
                    <Typography gutterBottom variant='h5'>
                      Heading
                    </Typography>
                    <Typography gutterBottom variant='h6'>
                      This is a meadia card to describe the content
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'>View</Button>
                    <Button size='small' color='primary'>Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}

          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>Footer</Typography>
        <Typography variant='subtitle1' align='center' gutterBottom>Something here to give the footer a purpose</Typography>
      </footer>
    </>

  )
}

export default App;