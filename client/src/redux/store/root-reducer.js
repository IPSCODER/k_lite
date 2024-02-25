import { combineReducers } from "redux";

import { todoReducer} from "../reducer/todoReducer";
import { userReducer } from "../reducer/userReducer";


export const rootReducer = combineReducers({todoReducer,userReducer});