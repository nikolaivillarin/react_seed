import { takeLatest, put } from 'redux-saga/effects';
import { errorDeviceList, loadDeviceList, loadedDeviceList } from './actions';

/**
 * Root saga manages watcher lifecycle
 */

function* loadDeviceEvent() {
  try {
    yield put(loadedDeviceList({ deviceList: [] }));
  } catch (err) {
    yield put(errorDeviceList(err));
  }
}

export default function* LoadhomeSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(loadDeviceList().type, loadDeviceEvent);
}
