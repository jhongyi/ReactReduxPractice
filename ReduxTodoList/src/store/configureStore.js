import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';	// redux-logger 方便除錯
import Immutable from 'immutable';
import rootReducer from '../reducers';

/* createStore：createStore(reducer, [preloadedState], [enhancer])
  我們知道在 Redux 中只會有一個 store。在產生 store 時我們會使用 createStore 這個 API 來創建 store。
  第一個參數放入我們的 reducer 或是有多個 reducers combine（使用 combineReducers）在一起的 rootReducers。
  第二個參數我們會放入希望預先載入的 state 例如：user session 等。
  第三個參數通常會放入我們想要使用用來增強 Redux 功能的 middlewares，若有多個 middlewares 的話，通常會使用 applyMiddleware 來整合。
*/

const initialState = Immutable.Map();
export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(createLogger({ stateTransformer: state => state.toJS() }))
);
