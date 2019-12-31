import React from 'react'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: 2,
    position: 'absolute',
    marginTop: '120px',
    marginLeft:'75px',
    padding: '2px 4px',
    display: 'flex',
    salignItems: 'center',
    width: 400,
    height:30,
    borderRadius: 4
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  muiTabs: {
    minHeight:2,
  },
  tab: {
    width: 133,
    height: 30,
    minHeight:2,
    padding: 3,
    minWidth:133.3
  }

}))

export default function Tabbar(props) {
  const [value, setValue] = React.useState(0)
  const classes = useStyles()

  const handleChange = (event, newValue) => {
    setValue(newValue)
    props.click(newValue)
  }

  return (
    <div>
      <Paper square className={classes.root}>
        <Tabs
          className={classes.muiTabs}
          value={value}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab className={classes.tab} label="Województwa" />
          <Tab className={classes.tab} label="Powiaty" />
          <Tab className={classes.tab} label="Gminy" />
        </Tabs>
      </Paper>
    </div>
  )
}