import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import headerBackgroundUrl from '../../../assets/images/dashboard-header-bg.svg';
import { useGetSiteInfos } from '../../../hooks/site-hooks';
import { siteSelector } from '../../../selectors/site-selector';

import { FILTERING_YEARS } from './contants';
import useTenantInfosStyles from './styles';

const TenantInfos = () => {
  const styles = useTenantInfosStyles();
  const site = useSelector(siteSelector);

  const [yearsMenuEl, setYearsMenuEl] = useState(null);
  const [selectedYear, setSelectedYear] = useState(FILTERING_YEARS[0]);
  const isYearsMenuOpen = Boolean(yearsMenuEl);

  const { data } = useGetSiteInfos(site.id, selectedYear.value);

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
    <Box sx={{ mt: 2 }}>
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
          {FILTERING_YEARS.map((option, index) => (
            <MenuItem key={index} onClick={() => handleClickYear(option)}>
              {option.label}
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <Grid container columns={{ xs: 1, sm: 2, md: 3, lg: 6 }} spacing={{ xs: 3, sm: 6, lg: 1, xl: 10, xxl: 16 }}>
        {data.map((info, index) => (
          <Grid item xs={1} key={index} xxl={3}>
            <Card sx={styles.cardBlock}>
              <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress variant='determinate' size='' value={info.percent} sx={styles.progressCircle} />
                <Box sx={styles.arrowIcon}>
                  <ArrowOutwardIcon />
                </Box>
              </Box>
              <Box>
                <Typography variant='h6' sx={styles.cardTitle}>
                  {info.label}
                </Typography>
                <Typography variant='body2' sx={styles.cardSubtitle}>
                  {info.value}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TenantInfos;
