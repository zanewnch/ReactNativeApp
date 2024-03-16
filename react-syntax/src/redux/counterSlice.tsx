import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

interface UserState {
  name: string;
  age: number;
}

const userSlice = createSlice({
  name: "user",
  initialState: { name: "aaa", age: 0 } as UserState,
  reducers: {
    /* 是的，你是對的。在 Redux 中，當你分派（dispatch）一個 action 時，你可以傳遞一個 payload。這個 payload 就是你提到的 "trigger function 會傳進來的params"。

    在你的 reducer 或 slice 中，你可以通過 action.payload 來訪問這個值（在這個例子中是 25）： */
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
  },
});

interface CartItem {
  id: string;
  name: string;
}

interface CartState {
  items: CartItem[];
}

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] } as CartState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setName, setAge } = userSlice.actions;
export const { addItem, removeItem } = cartSlice.actions;
export const { increment, decrement } = counterSlice.actions;

export const userReducer = userSlice.reducer;
export const cartReducer = cartSlice.reducer;
export const counterReducer = counterSlice.reducer;
