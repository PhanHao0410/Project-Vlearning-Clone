import {
  ACCESS_TOKEN,
  CACHED_URL,
  CURRENT_USER,
} from 'admin/src/constants/localStorage';

export const getToken = () => localStorage.getItem(ACCESS_TOKEN);

export const getCachedUrl = () => localStorage.getItem(CACHED_URL);

export const removeCachedUrl = () => localStorage.removeItem(CACHED_URL);

export const isHavingToken = () => !!getToken();
export const getUser = () => localStorage.getItem(CURRENT_USER);
