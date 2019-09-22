import { createStore } from  "redux";
import reducer from "./reducers";

// ====================================================================
// STORE
// An object that holds application state.
// ====================================================================

// window.STATE_FROM_SERVER: initial state. Useful for hydrating state of client to match state of a Redux app. running on server.
// window.__REDUX_DEVTOOLS_EXTENSION__: activates Redux Development Tools in Chrome browser window

const store = createStore(reducer, window.STATE_FROM_SERVER, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
