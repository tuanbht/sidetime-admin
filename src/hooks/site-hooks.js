import { useQuery } from '@tanstack/react-query';
import { isEmpty } from 'lodash';
import get from 'lodash/get';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import ApiClient from '../configurations/api-client';
import { buildApiGetSiteInfos } from '../constants/api-paths';
import { randomPercent } from '../utilities/math';

export const useGetSiteInfos = (siteId, year) => {
  const [response, setResponse] = useState([
    { label: 'Minutes', key: 'totalMinutes', value: 0, percent: 0 },
    { label: 'Sessions', key: 'totalSessions', value: 0, percent: 0 },
    { label: 'Revenue', key: 'revenue', value: 0.0, percent: 0 },
    { label: 'Credits', key: 'credits', value: 0.0, percent: 0 },
    { label: 'Users', key: 'usersCount', value: 0, percent: 0 },
    { label: 'Guides', key: 'expertProfilesCount', value: 0, percent: 0 },
  ]);

  const query = useQuery({
    queryKey: [siteId, 'infos', year],
    queryFn: async () => {
      const response = await ApiClient.get(buildApiGetSiteInfos(siteId), { params: { year } });

      return get(response, 'data');
    },
  });

  const { data, error } = query;

  useEffect(() => {
    if (!isEmpty(data)) {
      const currency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

      setResponse((prev) =>
        prev.map((item) => {
          const percent = randomPercent(60, 90);
          let value = get(data, item.key, 0);

          if (item.key === 'revenue' || item.key === 'credits') {
            value = currency.format(value);
          }

          return { ...item, value, percent };
        }),
      );
    }
  }, [data]);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  return { ...query, data: response };
};
