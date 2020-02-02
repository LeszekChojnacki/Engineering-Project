import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: 2,
    position: 'absolute',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center'
  }
}))

export default function Popup(props) {
  const classes = useStyles()
  console.log(props.features)
  return (
    <div>
      <Paper className={classes.root}>
        <text>{
          `Dla szukanej frazy: ${props.features.searchedPhrase}
          ${props.features.JPT_NAZWA_}
          ${props.features.POPULATION}`
        }</text>
        
      </Paper>
    </div>
  )
}

// return (
//   <PopupState variant="popover" popupId="demo-popup-popover">
//     {popupState => (
//       <div>
//         <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
//           Open Popover
//         </Button>
//         <Popover
//           {...bindPopover(true
//             )}
//           anchorOrigin={{
//             vertical: 'top',
//             horizontal: 'center',
//           }}
//           transformOrigin={{
//             vertical: 'top',
//             horizontal: 'center',
//           }}
//         >
//           <Box p={2}>
//             <Typography>The content of the Popover.</Typography>
//           </Box>
//         </Popover>
//       </div>
//     )}
//   </PopupState>
// )