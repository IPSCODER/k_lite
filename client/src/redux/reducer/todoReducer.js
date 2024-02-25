import * as types from "../actions/actionType.js"
const initialState ={
    name:"todo",
    todoData : [],
    search:'',
    comfirmBtn:null
}


export const todoReducer = (state=initialState,action) =>{
    switch(action.type){
        case types.GET_DATA :
            return {...state,
            todoData:action.payload
        }
        case types.SEARCH:
            return {
                ...state,
                search:action.payload
            }
            case types.CONFIRM_BTN:
            return {
                ...state,
                comfirmBtn:action.payload
            }
            case types.CREATE_DATA:
                case types.DELETE_DATA_ONE:
                    case types.UPDATE_DATA_ONE:
            return {
                ...state
            }
        default:
           return state
    }
}