import { configureStore } from '@reduxjs/toolkit';
import  { counterReducer,userReducer } from './redux/counterSlice';


// 是的，每当你创建一个新的 Redux slice（也就是一个新的 reducer 和一组相关的 actions），你都需要在你的主 store 配置文件中添加它。

// 在 Redux Toolkit 中，你通常会使用 configureStore 函数来创建你的 store，并将你的 reducers 传递给它。每个 reducer 都会管理 store 中的一个特定部分的状态。
const store = configureStore({
  reducer: {
    counter: counterReducer,
    user:userReducer
  },
});

export default store;