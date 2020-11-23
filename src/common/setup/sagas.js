import { all, fork } from 'redux-saga/effects';

import contactSaga from 'contact/contactSaga';

export default function* sagas() {
  yield all([
    fork(contactSaga),
  ]);
}
