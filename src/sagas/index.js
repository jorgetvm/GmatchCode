import { all, takeLatest } from 'redux-saga/effects';
import { TYPES as mainActions } from '../reducers/main';
import  * as mainSaga from '../sagas/main';

export default function* rootSaga() {
    yield all([
        takeLatest(mainActions.GET_TOURNAMENT_INFO,  mainSaga)
    ])
}
