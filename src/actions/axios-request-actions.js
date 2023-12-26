import { createAction } from '@reduxjs/toolkit';

export const get = (action, url, params = {}, configs = {}) =>
  createAction(action, () => ({
    payload: {
      request: {
        method: 'get',
        url,
        params,
        ...configs,
      },
    },
  }))();

export const post = (action, url, data = {}, configs = {}) =>
  createAction(action, () => ({
    payload: {
      request: {
        method: 'post',
        url,
        data,
        ...configs,
      },
    },
  }))();

export const put = (action, url, data = {}, configs = {}) =>
  createAction(action, () => ({
    payload: {
      request: {
        method: 'put',
        url,
        data,
        ...configs,
      },
    },
  }))();

export const deleteReq = (action, url, params = {}, configs = {}) =>
  createAction(action, () => ({
    payload: {
      request: {
        method: 'delete',
        url,
        params,
        ...configs,
      },
    },
  }))();

export const patch = (action, url, data = {}, configs = {}) =>
  createAction(action, () => ({
    payload: {
      request: {
        method: 'patch',
        url,
        data,
        ...configs,
      },
    },
  }))();
