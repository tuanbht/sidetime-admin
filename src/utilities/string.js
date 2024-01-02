import concat from 'lodash/concat';
import first from 'lodash/first';
import isEmpty from 'lodash/isEmpty';

export const stringAvatarName = (name) =>
  isEmpty(name) ? null : concat(first(name.split(' ')[0]), first(name.split(' ')[1]));
