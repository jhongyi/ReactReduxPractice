import Immutable from 'immutable';

/*
	設定 Actions 後我們來討論一下 Reducers 的部份。
	在討論 Reducers 之前我們先來設定一下我們的前端的資料結構，在這邊我們把所有資料結構（initialState）放到 src/constants/models.js 中。
	這邊特別注意的是由於 Redux 中有一個重要特性是 State is read-only，也就是說更新當 reducers 進到 action 只會回傳新的 state 不會更改到原有的 state。
	因此我們會在整個 Redux App 中使用 ImmutableJS 讓整個資料流維持在 Immutable 的狀態，也可以提昇程式開發上的效能和避免不可預期的副作用。
 */
export const TodoState = Immutable.fromJS({
  'todos': [],
  'todo': {
    id: '',
    text: '',
    updatedAt: '',
    completed: false,
  }
});

