import {
  put, select, takeLatest,
} from 'redux-saga/effects';
import defaultContacts from 'common/constants/data.json';
import {
  INIT, REFRESH_CONTACTS, setContacts, setIsLoading,
} from './contactActions';

function* onInit() {
  const contacts = yield select((state) => state.contact.contacts);

  if (!contacts.length) {
    yield put(setContacts(defaultContacts));
  }
}

function* onRefreshContacts() {
  // fetch data from json file for refresh
  yield put(setIsLoading(true));
  yield put(setContacts(defaultContacts));
  yield put(setIsLoading(false));
}

export default function* mainSaga() {
  yield takeLatest(INIT, onInit);
  yield takeLatest(REFRESH_CONTACTS, onRefreshContacts);
}
