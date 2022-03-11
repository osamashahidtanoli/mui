import { takeLatest } from "redux-saga/effects";
import { deleteItem, handleAddUser, handleGetUser, markAsComplete, markAsInComplete } from "./handlers/user";
import { NEW_USER, GET_USER, CHANGE_STATUS, CHANGE_STATUS_FALSE, DELETE_ITEM } from "../ducks/users";

export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
  yield takeLatest(NEW_USER, handleAddUser);
  yield takeLatest(CHANGE_STATUS, markAsComplete);
  yield takeLatest(CHANGE_STATUS_FALSE, markAsInComplete);
  yield takeLatest(DELETE_ITEM, deleteItem);
}
