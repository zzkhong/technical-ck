const CONTEXT = 'CONTACT';

export const INIT = `${CONTEXT}/INIT`;
export const SET_CONTACTS = `${CONTEXT}/SET_CONTACTS`;
export const SET_IS_LOADING = `${CONTEXT}/SET_IS_LOADING`;
export const REFRESH_CONTACTS = `${CONTEXT}/REFRESH_CONTACTS`;

export const init = () => ({
  type: INIT,
});

export const setContacts = (contacts) => ({
  type: SET_CONTACTS,
  contacts,
});

export const setIsLoading = (isLoading) => ({
  type: SET_IS_LOADING,
  isLoading,
});

export const refreshContacts = () => ({
  type: REFRESH_CONTACTS,
});
