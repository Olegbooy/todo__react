import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todo/todoSlice";


export const store = configureStore({
    reducer: {
        todo: todoSlice
    },
})

console.log(store.getState());
setInterval(()=>console.log(store.getState()),5000);