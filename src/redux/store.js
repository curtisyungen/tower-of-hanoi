import { createStore } from  "redux";
import reducer from "./reducers";

// ====================================================================
// STORE
// An object that holds application state.
// ====================================================================

const store = createStore(reducer, window.STATE_FROM_SERVER, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
