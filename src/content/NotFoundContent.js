import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';

import FindIcon from '@material-ui/icons/FindInPage';
import HomeIcon from '@material-ui/icons/Home';

import EmptyState from '../layout/EmptyState';

const styles = (theme) => ({
  emptyStateIcon: {
    fontSize: `${theme.spacing.unit * 12}px`
  },

  button: {
    marginTop: `${theme.spacing.unit}px`
  },

  buttonIcon: {
    marginRight: `${theme.spacing.unit}px`
  }
});

class NotFoundContent extends Component {
  render() {
    const { classes } = this.props;

    return (
      <EmptyState
        icon={<FindIcon className={classes.emptyStateIcon} color="action" />}
        title="Content Not Found"
        description="The requested URL was not found on this server"
        button={
          <Fab className={classes.button} color="primary" component={Link} to="/" variant="extended">
            <HomeIcon className={classes.buttonIcon} /> Go Home
          </Fab>
        }
      />
    );
  }
}

NotFoundContent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NotFoundContent);