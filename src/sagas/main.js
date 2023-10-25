import { put } from 'redux-saga/effects';
import { TYPES as mainActions } from '../reducers/main';


export function* getTournamentInfo(data) {
    yield put(mainActions.getTournamentInfo(4) )
}