import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import todoApi  from '../../requests/api';
import * as matchers from 'redux-saga-test-plan/matchers';
import { handleGetUser } from '../user';
import { getUser, setUser, SET_USER, GET_USER } from '../../../ducks/users';

it('fetchDataSaga -  when data is available in the response', () => {
    // const mockResponse = [{ id: 1, title: 'test', completed: false }];
    // const url = 'abc';
    // return expectSaga(handleGetUser)
    //   .provide([
    //     [call(todoApi.get, url), mockResponse],
    //     [matchers.call.fn(todoApi.get), mockResponse],
    //   ])
    //   .put({
    //     type: SET_USER,
    //     payload: mockResponse,
    //   })
    //   .dispatch({type: SET_USER, payload: mockResponse })
    //  .run();
  });

