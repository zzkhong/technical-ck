import {
  put, select, takeLatest,
} from 'redux-saga/effects';
import defaultContacts from 'common/constants/data.json';
import { INIT, setContacts } from './contactActions';

function* onInit() {
  const contacts = yield select((state) => state.contact.contacts);

  if (!contacts.length) {
    yield put(setContacts(defaultContacts));
  }
}

export default function* mainSaga() {
  yield takeLatest(INIT, onInit);
}
