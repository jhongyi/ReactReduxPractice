import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Main from './components/Main';
import store from './store';

/*
	react-redux: React 和 Redux 間的橋樑，使用 Provider、connect 去連結 store 和 React View
	Action -> Reducer -> Store -> Provider -> Connect -> View

	整合了 react-redux 後，我們的 React App 就可以解決傳統跨 Component 之前傳遞 state 的問題和困難。
	只要透過 Provider 就可以讓每個 React App 中的 Component 取用 store 中的 state
 */

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);