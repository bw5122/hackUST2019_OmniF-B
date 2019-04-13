import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    width: 800 / 23 * 24,
  },
  slider: {
    padding: '22px 0px',
  },
};

class StepSlider extends React.Component {
  state = {
    value: 3,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.handleChange(event, value)
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    console.log("slider", this.props.max)
    return (
      <div className={classes.root}>
        <Slider
          classes={{ container: classes.slider }}
          value={value}
          min={this.props.min}
          max={this.props.max}
          step={1}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

StepSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepSlider);
