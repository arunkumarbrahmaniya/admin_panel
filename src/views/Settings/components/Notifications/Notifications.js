import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import {
  Card,
  CardContent,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  item: {
    display: 'flex',
    flexDirection: 'column',
  }
}));

const Notifications = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
      style={{ height:140, boxShadow: '1px 1px 3px 3px lightgray', cursor:'pointer' }}
    >
      <SettingsBrightnessIcon style={{ height:100, width:150, zIndex:333333, color:'lightgray',position:'relative',bottom:-13  }}/>
        <CardContent style={{ position:'relative', bottom:60, left:75, fontSize:32, padding:0, zIndex:999999 }}>
        Manage Navigation
        </CardContent>
    </Card>
  );
};

Notifications.propTypes = {
  className: PropTypes.string
};

export default Notifications;
