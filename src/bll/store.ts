import {combineReducers, createStore} from "redux";
import {LoginReducer} from "./loginReducer";
import {RegistrationReducer} from "./RegistrationReducer";
import {ProfileReducer} from "./ProfileReducer";
import {SetPassReducer} from "./SetPassReducer";
import {RestorePassReducer} from "./RestorePassReducer";


const reducers = combineReducers({
    login: LoginReducer,
    Registration: RegistrationReducer,
    Profile: ProfileReducer,
    SetPass: SetPassReducer,
    RestorePass: RestorePassReducer,
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>
//
// @ts-ignore
window.store = store // for dev
