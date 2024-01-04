import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CssBaseline from '@mui/material/CssBaseline';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import find from 'lodash/find';
import isEmpty from 'lodash/isEmpty';
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import headerBackgroundUrl from '../../assets/images/dashboard-header-bg.svg';
import TenantInfos from '../../components/home/tenant-infos';
import TopGuides from '../../components/home/top-guides';
import { siteSelector } from '../../selectors/site-selector';

import { CURRENT_YEAR_OPTION } from './contants';
import useHomeStyles from './styles';
import { getYearsFromCreatedYear } from './utils';

const Home = () => {
  const styles = useHomeStyles();

  const site = useSelector(siteSelector);

  const [yearsMenuEl, setYearsMenuEl] = useState(null);
  const [selectedYear, setSelectedYear] = useState(CURRENT_YEAR_OPTION);
  const isYearsMenuOpen = Boolean(yearsMenuEl);

  const yearOptions = useMemo(() => getYearsFromCreatedYear(site.createdYear), [site.createdYear]);

  useEffect(() => {
    if (!isEmpty(yearOptions)) {
      find(yearOptions, selectedYear) || setSelectedYear(CURRENT_YEAR_OPTION);
    }
  }, [selectedYear, yearOptions]);

  const handleCloseYearsMenu = () => {
    setYearsMenuEl(null);
  };

  const handleClickYearsDropdown = (event) => {
    setYearsMenuEl(event.currentTarget);
  };

  const handleClickYear = (option) => {
    setSelectedYear(option);
    setYearsMenuEl(null);
  };

  return (
    <Box>
      <CssBaseline />
      <Box component='img' src={headerBackgroundUrl} sx={styles.headerBackground} />
      <Box sx={styles.tenantNameBox}>
        <Typography variant='h3' sx={styles.siteName}>
          {site.name}
        </Typography>

        <ButtonGroup variant='contained' aria-label='split button' sx={styles.filterredYear}>
          <Typography variant='h5' sx={styles.yearLabel}>
            Year-to-date Overview ({selectedYear.label})
          </Typography>
          <Button
            size='small'
            aria-label='select year'
            aria-haspopup='menu'
            onClick={handleClickYearsDropdown}
            sx={styles.selectYearButton}
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>

        <Menu
          anchorEl={yearsMenuEl}
          open={isYearsMenuOpen}
          onClose={handleCloseYearsMenu}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          {yearOptions.map((option, index) => (
            <MenuItem key={index} onClick={() => handleClickYear(option)}>
              {option.label}
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <TenantInfos selectedYear={selectedYear.value} />
      <TopGuides selectedYear={selectedYear.value} />
    </Box>
  );
};

export default Home;
