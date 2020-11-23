const CONTEXT = 'CONTACT';

export const INIT = `${CONTEXT}/INIT`;
export const SET_CONTACTS = `${CONTEXT}/SET_CONTACTS`;

export const init = () => ({
  type: INIT,
});

export const setContacts = (contacts) => ({
  type: SET_CONTACTS,
  contacts,
});
