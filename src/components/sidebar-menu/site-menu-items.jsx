import SettingsIcon from '@mui/icons-material/Settings';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import classNames from 'classnames';
import merge from 'lodash/merge';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import siteActions from '../../actions/site-actions';
import { siteSelector } from '../../selectors/site-selector';
import { sitesSelector } from '../../selectors/sites-selector';

import useSibarMenuStyles from './styles';

const SiteMenuItems = ({ open }) => {
  const sideBarMenuStyles = useSibarMenuStyles(open);
  const dispatch = useDispatch();

  const sites = useSelector(sitesSelector);
  const selectedSite = useSelector(siteSelector);

  return sites.map((site) => (
    <ListItem disablePadding sx={{ display: 'block' }} key={site.id}>
      <ListItemButton
        sx={merge(sideBarMenuStyles.linkItemButton, sideBarMenuStyles.menuLink)}
        className={classNames({ active: selectedSite.id === site.id })}
        onClick={() => dispatch(siteActions.selectSite(site))}
      >
        <ListItemIcon sx={sideBarMenuStyles.linkItemIcon}>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary={site.name} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  ));
};

export default SiteMenuItems;
