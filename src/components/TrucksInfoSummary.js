import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import PersonIcon from '@material-ui/icons/Person';
import FoodIcon from '@material-ui/icons/Fastfood';
import MoneyIcon from '@material-ui/icons/Money';
import TruckIcon from '@material-ui/icons/Commute';




import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class TrucksInfoSummary extends React.Component {
  state = {
    invOpen: false,
    salesOpen: false,
    orderOpen: false,
    customerOpen: false

  };

  handleInventoryClick = () => {
    this.setState(state => ({ invOpen: !state.invOpen }));
  };

  handleSalesClick = () => {
    this.setState(state => ({ salesOpen: !state.salesOpen }));
  };

  handleOrderClick = () => {
    this.setState(state => ({ orderOpen: !state.orderOpen }));
  };

  handleCustomerClick = () => {
    this.setState(state => ({ customerOpen: !state.customerOpen }));
  };

  render() {
    const { classes } = this.props;

    return (

      <List
        component="nav"
        subheader={<ListSubheader component="div">Truck #1 information</ListSubheader>}
        className={classes.root}
      >
        <ListItem button onClick={this.handleOrderClick}>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText inset primary="Uncollect Orders" />
          {this.state.orderOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.orderOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button onClick={this.handleCustomerClick} className={classes.nested}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText inset primary="Customer #1" />
              {this.state.customerOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.customerOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                  <FoodIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Chicken wings&emsp;&emsp;&emsp;&emsp;&emsp;2 pairs" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                  <FoodIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Cheese Pizza&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;1" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <FoodIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Spaghetti&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 3" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText inset primary="Customer #2" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText inset primary="Customer #3" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={this.handleSalesClick}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText inset primary="Sales Information" />
          {this.state.salesOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.salesOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <MoneyIcon />
              </ListItemIcon>
              <ListItemText inset primary="Total Revenue &emsp;HKD 23,999" />
            </ListItem>
          </List>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
              <MoneyIcon />
              </ListItemIcon>
              <ListItemText inset primary="Chicken Burger &emsp;HKD 10,000" />
            </ListItem>
          </List>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
              <MoneyIcon />
              </ListItemIcon>
              <ListItemText inset primary="French Fries &emsp;HKD 3,999" />
            </ListItem>
          </List>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
              <MoneyIcon />
              </ListItemIcon>
              <ListItemText inset primary="Fried Chicken &emsp;HKD 10,000" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={this.handleInventoryClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText inset primary="Current Inventory" />
          {this.state.invOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.invOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
              <FoodIcon />
              </ListItemIcon>
              <ListItemText inset primary="Chicken wings&emsp;&emsp;&emsp;&emsp;&emsp;10 pairs" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
              <FoodIcon />
              </ListItemIcon>
              <ListItemText inset primary="Fried Chicken&emsp;&emsp;&emsp;&nbsp;&nbsp;15 boxes" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
              <FoodIcon />
              </ListItemIcon>
              <ListItemText inset primary="French Fries&emsp;&emsp;&emsp;&nbsp;&nbsp;10 packages" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    );
  }
}

TrucksInfoSummary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TrucksInfoSummary);
