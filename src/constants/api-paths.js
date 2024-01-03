import { generatePath } from 'react-router-dom';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API_SIGN_IN = '/sign_in';
export const API_GET_CURRENT_ADMIN = '/admins/current';
export const API_PASSWORD = '/password';
export const API_GET_SITE_INFOS = '/sites/:siteId';
export const API_GET_SITE_TOP_GUIDES = '/sites/:siteId/top_guides';

export const buildApiGetSiteInfos = (siteId) => generatePath(API_GET_SITE_INFOS, { siteId });
export const buildApiGetSiteTopGuides = (siteId) => generatePath(API_GET_SITE_TOP_GUIDES, { siteId });
