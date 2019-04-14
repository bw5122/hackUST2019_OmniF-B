import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import TruckIcon from '@material-ui/icons/Commute';
import MoneyIcon from '@material-ui/icons/Money';
import ShopIcon from '@material-ui/icons/ShoppingCart';

import BookMarkIcon from '@material-ui/icons/Bookmark';



const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function SummaryInfo(props) {
  const { classes } = props;
  return (
    <List className={classes.root}>
      <ListItem>
        <Avatar>
          <TruckIcon />
        </Avatar>
        <ListItemText primary="Number of trucks on road" secondary="10 trucks in total" />
      </ListItem>
      <ListItem>
        <Avatar>
          <MoneyIcon />
        </Avatar>
        <ListItemText primary="Total revenue" secondary="HKD 102,031" />
      </ListItem>
      <ListItem>
        <Avatar>
          <ShopIcon />
        </Avatar>
        <ListItemText primary="Total orders today" secondary="6021 orders in total" />
      </ListItem>
      <ListItem>
        <Avatar>
          <BookMarkIcon />
        </Avatar>
        <ListItemText primary="Total orders uncollected" secondary="321 orders" />
      </ListItem>
    </List>
  );
}

SummaryInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SummaryInfo);
