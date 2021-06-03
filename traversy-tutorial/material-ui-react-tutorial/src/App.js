import logo from './logo.svg';
import './App.css';
import React from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { green, orange } from '@material-ui/core/colors'
import 'fontsource-roboto';

import Typohraphy from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15
    }
  },
  palette: {
    primary: {
      main: green[400], 
    },
    secondary: {
      main:'#607d8b', 
    }
  }
})

function ButtonStyled(){
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)

  
  return(
      <FormControlLabel
          control={<Checkbox
          checked = {checked}
          onChange={(e)=>setChecked(e.target.checked)}
          color="primary"
          inputProps={{
            'aria-label': 'secondaru checkbox'
          }}
          />}
        label="Testing Checkbox"
      />

  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='lg'>
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <Toolbar>
                <IconButton edge='start'>
                  <MenuIcon />
                </IconButton>
                <Typohraphy variant="h6">
                    MUI Theming
                  </Typohraphy>
                  <Button variant="contained"          
                    color="gray">
                    GENERATE STATS
                  </Button>
                  <Button variant="contained"          
                    color="gray">
                    UPLOAD MATCHES
                  </Button>
              </Toolbar>
            </AppBar>
            <Typohraphy variant = "h2" component="div">
              Welcome to MUI
            </Typohraphy>
            <Typohraphy variant = "subtitle1+">
              Learn how to use material UI
            </Typohraphy>
            <ButtonStyled/>

            <Grid container spacing={1} justify="center">
              <Grid item xs={3} >
                <Paper style={{height: 100, width: '100%',}} />
                
              </Grid>
              <Grid item xs={3}>
                <Paper style={{height: 100, width: '100%',}} />
              </Grid>
              <Grid item xs={3}>
                <Paper style={{height: 100, width: '100%',}} />
              </Grid>
            </Grid>

            <TextField
              variant="outlined"
              color="secondary"
              type="email"
              label="The Time"
              placeholder="test@test.com"
            />
            <CheckboxExample />            
            <ButtonGroup>
              <Button 
                startIcon={<SaveIcon />}
                size="large"
                style={{
                  fontSize: 24
                }}
                variant="contained"          
                color="primary">
                Save
              </Button>
              <Button 
                startIcon={<DeleteIcon />}
                size="large"
                style={{
                  fontSize: 24
                }}
                variant="contained"          
                color="secondary">
                Discard
              </Button>
            </ButtonGroup>
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
