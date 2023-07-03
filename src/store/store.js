import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../features/todoSlice'


const store = configureStore({
    reducer: {
        todo: todoSlice
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }) ,

})


export default store

