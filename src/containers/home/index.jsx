import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';

import TenantInfos from '../../components/home/tenant-infos';
import TopGuides from '../../components/home/top-guides';

const Home = () => (
  <Box>
    <CssBaseline />
    <TenantInfos />
    <TopGuides />
  </Box>
);

export default Home;
