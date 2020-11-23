import { all, fork } from 'redux-saga/effects';

import contactSaga from 'contact/contactSaga';
import editContactSaga from 'editContact/editContactSaga';

export default function* sagas() {
  yield all([
    fork(contactSaga),
    fork(editContactSaga),
  ]);
}
