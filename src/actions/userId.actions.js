import * as ActionTypes from '../constants/userId.constants';

export const userId = values => ({
  type: ActionTypes.USER_ID_REQUEST,
  payload: values,
});
export const userIdSuccess = value => ({
  type: ActionTypes.USER_ID_SUCCESS,
  payload: value,
});
export const userIdError = error => ({
  type: ActionTypes.USER_ID_ERROR,
  payload: error,
});