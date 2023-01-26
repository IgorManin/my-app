import {combineReducers, legacy_createStore as createStore} from "redux";
import contentReducer from "./content-reducer";
import messageReducer from "./message-reducer";
import siteBarReducer from "./siteBar-reducer";



let reducers = combineReducers({
    content: contentReducer,
    dialogs: messageReducer,
    siteBar: siteBarReducer,
})

let store = createStore(reducers)

export default store