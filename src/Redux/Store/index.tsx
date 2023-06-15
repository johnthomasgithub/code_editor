import { configureStore } from '@reduxjs/toolkit'
import { loaderReducer } from '../Reducer/Reducers'
export default configureStore({
  reducer: {
    apiLoader: loaderReducer,
  },
})
