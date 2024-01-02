import { useQuery } from '@tanstack/react-query';
import get from 'lodash/get';

import ApiClient from '../configurations/api-client';
import { buildApiGetSiteInfos } from '../constants/api-paths';

export const useGetSiteInfos = (siteId, year) =>
  useQuery({
    queryKey: [siteId, 'infos', year],
    queryFn: async () => {
      console.log(year);
      const response = await ApiClient.get(buildApiGetSiteInfos(siteId), { params: { year } });

      return get(response, 'data');
    },
  });
