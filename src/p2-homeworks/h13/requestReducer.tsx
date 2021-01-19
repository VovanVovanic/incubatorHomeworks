import { ThunkAction } from "redux-thunk"
import { AppStoreType } from "../h10/bll/store"
import { putRequest } from "./requestAPI";

const PUT__REQUEST = 'PUT__REQUEST'

type initType = typeof initState
type requestActionType = ReturnType<typeof putRequestAC>
const initState = {
  message: '',
  error: false
}

export const requestReducer = (state: initType = initState, action:requestActionType): initType => {
  switch (action.type) {
    case PUT__REQUEST: {
      return{...state, message: action.msg, error:action.error}
    }
      default: return state
  }
}

export const putRequestAC = (msg: string, error:boolean) => {
  return{type: PUT__REQUEST, msg, error}as const
}

export const putNewRequest = (value: boolean): ThunkAction<void, AppStoreType, unknown, requestActionType> => {
 
  
  return (dispatch)=>{
    putRequest(value).then((res) => {
      dispatch(putRequestAC(res.errorText, false));
      
    })
      .catch((err) => {
        let errMsg = err.response ? err.response.data.errorText : "Something gona wrong...."
      dispatch(putRequestAC(errMsg, true));
      
    })
  }
}