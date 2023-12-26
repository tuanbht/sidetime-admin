import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';

import adminActions from '../actions/admin-actions';
import { CURRENT_ADMIN } from '../constants/query-keys';

export const useGetCurrentAdminQuery = () => {
  const dispatch = useDispatch();

  return useQuery({
    queryKey: [CURRENT_ADMIN],
    queryFn: () => dispatch(adminActions.getCurrentAdmin()),
  });
};
