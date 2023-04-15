/* eslint-disable no-nested-ternary */
import React from 'react';
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { PropTypes } from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import ItemLinkSyle from './ItemLinkSyle';
function ListItemLink(props) {
  const { to, open, menu, menuText, icon, ...other } = props;

  return (
    <ItemLinkSyle>
      <ListItem
        className="lstItem"
        button
        component={RouterLink}
        to={to}
        {...other}
      >
        <ListItemIcon className="lstItemIcon">{icon}</ListItemIcon>
        <ListItemText primary={menuText} />
        {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItem>
    </ItemLinkSyle>
  );
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

export default ListItemLink;
