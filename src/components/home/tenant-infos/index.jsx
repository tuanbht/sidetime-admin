import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';

import { useGetSiteInfos } from '../../../hooks/site-hooks';

import useTenantInfosStyles from './styles';

const TenantInfos = ({ selectedYear }) => {
  const styles = useTenantInfosStyles();

  const { data } = useGetSiteInfos(selectedYear);

  return (
    <Box sx={styles.container}>
      <Grid container columns={{ xs: 1, sm: 2, md: 3, lg: 6 }} spacing={{ xs: 3, sm: 6, lg: 1, xl: 10, xxl: 16 }}>
        {data.map((info, index) => (
          <Grid item xs={1} key={index} xxl={3}>
            <Card sx={styles.cardBlock}>
              <Box sx={styles.progressCircleContainer}>
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

TenantInfos.propTypes = {
  selectedYear: PropTypes.number.isRequired,
};

export default TenantInfos;
