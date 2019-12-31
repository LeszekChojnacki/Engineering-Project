import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: 2,
    position: 'absolute',
    marginTop: '470px',
    marginLeft:'75px',
    backgroundColor: 'white',
    padding: 12
  },
  name: {
    marginTop: 0,
    marginBottom: 5

  },
  description: {
    marginTop: 0,
    marginBottom: 5
  },
  legendColor: {
    borderRadius: '50%',
    display:'inline-block',
    height: 10,
    width: 10,
    marginRight: 5,
  }

}))

export default function Legend(props) {
  
  const classes = useStyles()
  
  if(props.active == null){ return <div></div> }
  else{

    const { name, description, stops } = props.active

    const renderLegendKeys = (stop, i) => {
        return (
          <div key={i} className='txt-s'>
            <span className={classes.legendColor} style={{backgroundColor: stop[1]}} />
            <span>{`${stop[0].toLocaleString()}`}</span>
          </div>
        )
    }

    return (
      <Paper className={classes.root}>
          <div className="bg-white absolute bottom right mr12 mb24 py12 px12 shadow-darken10 round z1 wmax180">
              <div className='mb6'>
                  <h2 className={classes.name}>{name}</h2>
                  <p className={classes.description}>{description}</p>
              </div>
              {stops.map(renderLegendKeys)}
          </div>
      </Paper>
    )
  }
}