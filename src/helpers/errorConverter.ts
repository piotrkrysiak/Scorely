// eslint-disable-next-line import/prefer-default-export
export const errorConverter = (error: any): string => {
  if ('status' in error) {
    return error.status.toString();
  }
  return error.message || 'Unknown error';
};
