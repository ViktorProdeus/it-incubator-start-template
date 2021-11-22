import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import store from "../../bll/store";
import Main from "./main/Main";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <HashRouter>
                    <Main/>
                </HashRouter>
            </Provider>
        </div>
    );
}

export default App;
