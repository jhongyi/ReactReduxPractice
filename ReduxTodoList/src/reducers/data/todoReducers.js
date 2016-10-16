import { handleActions } from 'redux-actions';
import { TodoState } from '../../constants/models';

/*
  接下來我們要討論的是 Reducers 的部份，
  在 todoReducers 中我們會根據接收到的 action 進行 mapping 到對應的處理函式並傳入夾帶的 payload 資料（這邊我們使用 redux-actions 來進行 mapping，使用上比傳統的 switch 更為簡潔）。
  Reducers 接收到 action 的處理方式為 (initialState, action) => newState，最終會回傳一個新的 state，而非更改原來的 state，所以這邊我們使用 ImmutableJS。 
 */
import {
  CREATE_TODO,
  DELETE_TODO,
  CHANGE_TEXT,
} from '../../constants/actionTypes';

 const todoReducers = handleActions({
  CREATE_TODO: (state) => {
    let todos = state.get('todos').push(state.get('todo'));
    return state.set('todos', todos)
  },
  DELETE_TODO: (state, { payload }) => (
    state.set('todos', state.get('todos').splice(payload.index, 1))
  ),
  CHANGE_TEXT: (state, { payload }) => (
    state.merge({ 'todo': payload })
  )
}, TodoState);

export default todoReducers;
