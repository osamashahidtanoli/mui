import { call, put } from "redux-saga/effects";
import { addUser, changedStatus, setUser, deletedItem } from "../../ducks/users";
import todoApi from "../requests/api";

export function* handleGetUser() {
  try {
    const response: AxiosResponse = yield call(todoApi.get, "/todos");
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    console.log("Couldn't Proceed.");
  }
}


export function* handleAddUser(action) {
  try{
    const reponse: AxiosResponse = yield call(todoApi.post, "/todos", {
      title: action.todo.title,
      completed: action.todo.completed
    })
    const {data} = reponse;
    yield put(addUser(data));
  }
  catch{
    console.log('Could not Add');
  }
}

export function* markAsComplete(action) {
  try{
    const reponse: AxiosResponse = yield call(todoApi.patch, `/todos/${action.id}`, {
      completed: true
    })
    const {data} = reponse;
    yield put(changedStatus(data.id))
  }
  catch{
    console.log('Could Not Mark As Complete');
  }
}


export function* markAsInComplete(action) {
  try{
    const reponse: AxiosResponse = yield call(todoApi.patch, `/todos/${action.id}`, {
      completed: false
    })
    const {data} = reponse;
    yield put(changedStatus(data.id))
  }
  catch{
    console.log('Could Not Mark As InComplete');
  }
} 


export function* deleteItem(action) {
  try{
    const reponse: AxiosResponse = yield call(todoApi.delete, `/todos/${action.deleteId}`)
    console.log(reponse)
    yield put(deletedItem(action.deleteId))
  }
  catch{

  }
}


