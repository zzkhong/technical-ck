import { setContacts } from 'contact/contactActions';
import {
  put, select, takeLatest,
} from 'redux-saga/effects';
import { SUBMIT_INFO } from './editContactActions';

function* onSubmitInfo({ info }) {
  const contacts = yield select((state) => state.contact.contacts);
  const index = contacts.findIndex((c) => c.id === info.id);

  const newContacts = [...contacts];
  newContacts[index] = info;

  yield put(setContacts(newContacts));
}

export default function* mainSaga() {
  yield takeLatest(SUBMIT_INFO, onSubmitInfo);
}
