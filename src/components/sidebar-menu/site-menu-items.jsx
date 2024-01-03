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
import useCommonStyles from '../../styles/common';

import useSibarMenuStyles from './styles';

const SiteMenuItems = ({ open }) => {
  const dispatch = useDispatch();

  const styles = useSibarMenuStyles(open);
  const commonStyles = useCommonStyles();

  const sites = useSelector(sitesSelector);
  const selectedSite = useSelector(siteSelector);

  return sites.map((site) => (
    <ListItem disablePadding sx={commonStyles.displayBlock} key={site.id}>
      <ListItemButton
        sx={merge(styles.linkItemButton, styles.menuLink)}
        className={classNames({ active: selectedSite.id === site.id })}
        onClick={() => dispatch(siteActions.selectSite(site))}
      >
        <ListItemIcon sx={styles.linkItemIcon}>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary={site.name} sx={styles.linkItemLabel} />
      </ListItemButton>
    </ListItem>
  ));
};

export default SiteMenuItems;
