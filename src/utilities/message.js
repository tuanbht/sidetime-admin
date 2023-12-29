import isArray from 'lodash/isArray';
import isEmpty from 'lodash/isEmpty';
import isPlainObject from 'lodash/isPlainObject';
import mapValues from 'lodash/mapValues';
import omit from 'lodash/omit';
import pickBy from 'lodash/pickBy';
import upperFirst from 'lodash/upperFirst';
import values from 'lodash/values';

const DEFAULT_ERROR_MESSAGE = 'Something went wrong. Please try again.';
const NO_PERMISSION = 'You do not have permission to perform this action';

const formatArrayMessages = (response) =>
  mapValues(response, (errors, fieldName) =>
    fieldName === 'base' ? errors[0] : upperFirst(`${fieldName.replace(/([A-Z])/g, ' $1').toLowerCase()} ${errors[0]}`),
  );

export const getErrorMessage = (response = {}) => {
  const { status, data } = response;

  let errorMessage = '';

  if (status === 500) {
    return DEFAULT_ERROR_MESSAGE;
  } else if (status === 403) {
    return NO_PERMISSION;
  } else if (typeof data === 'string') {
    errorMessage = data;
  } else if (isPlainObject(data)) {
    const omittedErrorCodeData = pickBy(omit(data, ['errorCode']), 'length');
    const firstError = values(omittedErrorCodeData)[0];

    if (isArray(firstError)) {
      errorMessage = values(formatArrayMessages(omittedErrorCodeData))[0];
    }

    if (typeof firstError === 'string') {
      errorMessage = firstError;
    }
  }

  return isEmpty(errorMessage) ? DEFAULT_ERROR_MESSAGE : errorMessage;
};
