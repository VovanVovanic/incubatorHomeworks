import { themeReducer } from './../../h12/bll/themeReducer';
import { applyMiddleware, combineReducers, createStore } from "redux";
import { loadingReducer } from "./loadingReducer";
import{ reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk';
import { requestReducer } from '../../h13/requestReducer';

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
    request: requestReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev
