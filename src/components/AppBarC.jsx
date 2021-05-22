import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles} from "@material-ui/core"


const useStyles = makeStyles({
    appbar:{
        background:"linear-gradient(45deg,green,grey)",
    }
})

function AppBarC() {

    const classes = useStyles()
    return (
      <AppBar className={classes.appbar}>      
          <Toolbar >
              <Typography variant="subtitle1" >Weather App</Typography>
          </Toolbar>
      </AppBar>
    )
}

export default AppBarC
