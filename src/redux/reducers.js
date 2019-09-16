import { MOVE, RESET } from "./actions";

// ====================================================================
// INITIAL STATE
// The initial state of the application.
// ====================================================================

const initialState = {
    towers: [
        [5, 4, 3, 2, 1],
        [],
        [],
    ],
}

// ====================================================================
// REDUCER
// Specifies how the app's state changes in response to actions sent to the store.
// Must be a pure function that is completely predictable with no side effects.
// ====================================================================

// Object.assign is a method used to copy the values of enumerable properties from 
// a source object to a target object. 

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case MOVE:
            return Object.assign({}, state, {   // First parameter must be empty object
                towers: [
                    ...state.towers,
                ]
            });
        case RESET:
            return Object.assign({}, state, {
                towers: [[5, 4, 3, 2, 1], [], []],
            });
        default: 
            return state;   // Return previous state for any unknown action
    }
}

export default reducer;