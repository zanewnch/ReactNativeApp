import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';

/* 
要使用redux, 除了install related dependency 之外, 要創建store.ts, 然後使用Provider, 並使用下面的syntax

每次新增redux store的時候,都要到store.ts 進行註冊
*/

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* // 使用 Provider 組件並傳遞你的 store */}
    <Provider store={store}>  
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
