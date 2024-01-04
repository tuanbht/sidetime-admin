import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import defaultAvatarUrl from '../../../assets/images/default-avatar.png';
import { useGetSiteTopGuides } from '../../../hooks/site-hooks';
import { stringAvatarName } from '../../../utilities/string';

import useTopGuidesStyles from './styles';

const TopGuides = ({ selectedYear }) => {
  const styles = useTopGuidesStyles();

  const { data } = useGetSiteTopGuides(selectedYear);

  const [openUsersModal, setOpenUsersModal] = useState(false);
  const [modalUsers, setModalUsers] = useState([]);

  const handleCloseUsersModal = () => setOpenUsersModal(false);

  const handleopenUsersModal = (users) => {
    setOpenUsersModal(true);
    setModalUsers(users);
  };

  return (
    <Box sx={styles.container}>
      <Grid container columns={{ xs: 1, lg: 3 }}>
        <Grid item xs={1} lg={2}>
          <Paper elevation={12}>
            <Box sx={styles.titleContainer}>
              <Typography variant='h5' sx={styles.title}>
                Top Guides
              </Typography>
              <Typography variant='body1' sx={styles.subtitle}>
                Top 15 guides with the highest revenue
              </Typography>
            </Box>

            <TableContainer>
              <Table aria-label='top guides'>
                <TableHead sx={styles.tableHeader}>
                  <TableRow>
                    <TableCell>Guides</TableCell>
                    <TableCell align='right'>Users</TableCell>
                    <TableCell align='right'>Minutes</TableCell>
                    <TableCell align='right'>Revenue</TableCell>
                    <TableCell align='right'>Completion</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((guide, idx) => (
                    <TableRow key={idx} sx={styles.tableRow}>
                      <TableCell component='th' scope='row' sx={styles.tableGuideCol}>
                        <Avatar src={guide.avatarUrl} alt='Guide Avatar' sx={styles.userAvatar}>
                          <img src={defaultAvatarUrl} />
                        </Avatar>
                        <Typography>{guide.name}</Typography>
                      </TableCell>
                      <TableCell align='right'>
                        <AvatarGroup
                          sx={styles.avatarGroup}
                          total={guide.users.length}
                          max={4}
                          onClick={() => handleopenUsersModal(guide.users)}
                        >
                          {guide.users.map((user, idx) => (
                            <Avatar key={idx} src={user.avatarUrl} alt={user.name} sx={styles.userAvatar}>
                              {stringAvatarName(user.name)}
                            </Avatar>
                          ))}
                        </AvatarGroup>
                      </TableCell>
                      <TableCell align='right'>{guide.totalMins}</TableCell>
                      <TableCell align='right'>{guide.revenue}</TableCell>
                      <TableCell align='right'>
                        <LinearProgress variant='determinate' value={guide.completion} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>

      <Modal
        open={openUsersModal}
        onClose={handleCloseUsersModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Box sx={styles.usersModal}>
          <Typography id='modal-modal-title' variant='h6' sx={styles.modalTitle}>
            Users
          </Typography>
          {modalUsers.map((user, idx) => (
            <Box key={idx} sx={styles.modalUserContainer}>
              <Avatar alt={user.name} src={user.avatarUrl} sx={styles.userAvatar}>
                <img src={defaultAvatarUrl} />
              </Avatar>
              <Typography>{user.name}</Typography>
            </Box>
          ))}
        </Box>
      </Modal>
    </Box>
  );
};

TopGuides.propTypes = {
  selectedYear: PropTypes.number.isRequired,
};

export default TopGuides;
