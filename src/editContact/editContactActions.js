const CONTEXT = 'INFO';

export const SUBMIT_INFO = `${CONTEXT}/SUBMIT_INFO`;

export const submitInfo = (info) => ({
  type: SUBMIT_INFO,
  info,
});
