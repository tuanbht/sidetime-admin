import { Avatar, AvatarGroup, Backdrop, Modal } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

import defaultAvatarUrl from '../../../assets/images/default-avatar.png';
import { stringAvatarName } from '../../../utilities/string';

import useTopGuidesStyles from './styles';

const TopGuides = () => {
  const styles = useTopGuidesStyles();

  const [openUsersModal, setOpenUsersModal] = useState(false);
  const [modalUsers, setModalUsers] = useState([]);

  const handleCloseUsersModal = () => setOpenUsersModal(false);
  const handleopenUsersModal = (users) => {
    setOpenUsersModal(true);
    setModalUsers(users);
  };

  const rows = [
    {
      guide: 'Frozen yoghurt',
      users: [
        { name: 'A B' },
        { name: 'BB' },
        { name: 'CC' },
        { name: 'DD' },
        { name: 'EE' },
        { name: 'A B' },
        { name: 'BB' },
        { name: 'CC' },
        { name: 'DD' },
        { name: 'EE' },
        { name: 'A B' },
        { name: 'BB' },
        { name: 'CC' },
        { name: 'DD' },
        { name: 'EE' },
        { name: 'A B' },
        { name: 'BB' },
        { name: 'CC' },
        { name: 'DD' },
        { name: 'EE' },
        { name: 'A B' },
        { name: 'BB' },
        { name: 'CC' },
        { name: 'DD' },
        { name: 'EE' },
        { name: 'A B' },
        { name: 'BB' },
        { name: 'CC' },
        { name: 'DD' },
        { name: 'EE' },
      ],
      minuteUsed: 6.0,
      revenue: 24,
      completion: 4.0,
    },
  ];

  return (
    <Box sx={{ mt: 10 }}>
      <Box sx={styles.tenantNameBox}>
        <Typography variant='h5' sx={styles.siteName}>
          Top Guides
        </Typography>
        <Typography variant='body2' sx={styles.filterredYear}>
          15 New Acquired
        </Typography>
      </Box>

      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Guides</TableCell>
              <TableCell align='right'>Users</TableCell>
              <TableCell align='right'>Minute Used</TableCell>
              <TableCell align='right'>Revenue</TableCell>
              <TableCell align='right'>Completion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.guide} sx={styles.tableRow}>
                <TableCell component='th' scope='row' sx={styles.tableGuideCol}>
                  <Avatar src={row.avatar} alt='Guide Avatar' sx={styles.userAvatar}>
                    <img src={defaultAvatarUrl} />
                  </Avatar>
                  <Typography>{row.guide}</Typography>
                </TableCell>
                <TableCell align='right'>
                  <AvatarGroup total={row.users.length} max={4} onClick={() => handleopenUsersModal(row.users)}>
                    {row.users.map((user, idx) => (
                      <Avatar key={idx} alt={user.name} sx={styles.userAvatar}>
                        {stringAvatarName(user.name)}
                      </Avatar>
                    ))}
                  </AvatarGroup>
                </TableCell>
                <TableCell align='right'>{row.minuteUsed}</TableCell>
                <TableCell align='right'>{row.revenue}</TableCell>
                <TableCell align='right'>{row.completion}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

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
              <Avatar alt={user.name} sx={styles.userAvatar}>
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

export default TopGuides;
