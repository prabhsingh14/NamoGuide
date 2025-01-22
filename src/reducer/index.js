import { combineReducers } from "@reduxjs/toolkit"
import authReducer from "../slices/authSlice"
import wishlistReducer from "../slices/wishlistSlice"
import profileReducer from "../slices/profileSlice"

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    wishlist: wishlistReducer,
})

export default rootReducer
