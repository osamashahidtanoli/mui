import { TodoStore} from "../types";
export const GET_USER = "GET_USER";
export const ADD_USER = "ADD_USER"
export const SET_USER = "SET_USER";
export const NEW_USER = 'NEW_USER'
export const CHANGE_STATUS = "CHANGE_STATUS";
export const CHANGED_STATUS = "CHANGED_STATUS";
export const CHANGE_STATUS_FALSE = "CHANGED_STATUS_FALSE";
export const DELETE_ITEM = "DELETE_ITEM";
export const DELETED_ITEM = "DELETED_ITEM";

export const getUser = () => ({
  type: GET_USER
});

export const setUser = (user) => ({
  type: SET_USER,
  user
});

export const addUserR = (todo) => ({
  type: NEW_USER,
  todo
})

export const addUser = (todo) => ({
  type:ADD_USER,
  todo
})

export const changeStatus = (id) => ({
  type: CHANGE_STATUS,
  id
})

export const changeStatusFalse = (id) => ({
  type: CHANGE_STATUS_FALSE,
  id
})

export const changedStatus = (id) => ({
  type: CHANGED_STATUS,
  id
})

export const deleteItem = (deleteId) => ({
  type: DELETE_ITEM,
  deleteId
})

export const deletedItem = (deleteId) => ({
  type: DELETED_ITEM,
  deleteId
})


const initialState: TodoStore = {
  user: []
}



// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const { user } = action;
      return { ...state, user };
      case ADD_USER: 
      const {todo} = action;
      return{...state, user: [...state.user, todo]};
      case CHANGED_STATUS: 
      const {id} = action;
      return {...state, user: state.user.map((u) => u.id === id ? {...u, completed: !u.completed} : u)};
      case DELETED_ITEM:
      const {deleteId} = action;
      return {...state, user: state.user.filter((u) => u.id !== deleteId)};
    default:
      return state;
  }
};
