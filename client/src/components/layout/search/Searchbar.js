import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import Paper from '@material-ui/core/Paper'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: 2,
    position: 'absolute',
    marginTop: '60px',
    marginLeft:'75px',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },

}))

export default function Searchbar(props) {
  const [value, setValue] = React.useState()
  const classes = useStyles()
  
  const handleSearch = (event) => {
    props.click(value)
  }

  return (
    <div>
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Szukaj Nazwisk"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={event=>{
          setValue(event.target.value)
        }}
      />
      <IconButton className={classes.iconButton} aria-label="search" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
    </div>
  )
}