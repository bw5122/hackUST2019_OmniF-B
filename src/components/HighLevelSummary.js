import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SummaryInfo from './SummaryInfo.js'

const styles = {
  main: {
    width: 320
  },
  media: {
    height: 140,
  },
  info:{
    marginLeft:20,
    marginTop:40
  }
};

function HighLevelSummary(props) {
  const { classes } = props;
  return (
    <div className={classes.main}>
      <div className = {classes.info}>
          <Typography gutterBottom variant="h5" component="h2">
            Trucks Summary
          </Typography>
          <Typography component="p">

          </Typography>
          <SummaryInfo/>
      </div>
    </div>
  );
}

HighLevelSummary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HighLevelSummary);
