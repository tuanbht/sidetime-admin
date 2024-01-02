import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useSelector } from 'react-redux';

import headerBackgroundUrl from '../../../assets/images/dashboard-header-bg.svg';
import { siteSelector } from '../../../selectors/site-selector';
import { randomPercent } from '../../../utilities/math';

import useTenantInfosStyles from './styles';

const TenantInfos = () => {
  const styles = useTenantInfosStyles();
  const site = useSelector(siteSelector);

  return (
    <Box sx={{ mt: 2 }}>
      <Box component='img' src={headerBackgroundUrl} sx={styles.headerBackground} />
      <Box sx={styles.tenantNameBox}>
        <Typography variant='h3' sx={styles.siteName}>
          {site.name}
        </Typography>
        <Typography variant='h5' sx={styles.filterredYear}>
          Year-to-date Overview (Jan 1, 2023 - Today)
        </Typography>
      </Box>

      <Grid container spacing={3} columns={{ xs: 1, sm: 2, md: 3, lg: 6 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={1} key={index}>
            <Card sx={styles.cardBlock}>
              <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress
                  variant='determinate'
                  size=''
                  value={randomPercent(60, 90)}
                  sx={styles.progressCircle}
                />
                <Box sx={styles.arrowIcon}>
                  <ArrowOutwardIcon />
                </Box>
              </Box>
              <Box>
                <Typography variant='h6' sx={styles.cardTitle}>
                  Minutes
                </Typography>
                <Typography variant='body2' sx={styles.cardSubtitle}>
                  2000
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
