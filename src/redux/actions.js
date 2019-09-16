// ====================================================================
// ACTIONS
// A plain object describing what happened.
// A payload of information that sends data from the app to the store. 
// ====================================================================

// ACTION TYPES
export const MOVE = "MOVE";
export const RESET = "RESET";

// ACTION CREATORS
// Functions that create actions.
export const move = (ring) => {
    return {
        type: MOVE,
        payload: {
            ring: ring,
        }
    }
}

export const reset = () => {
    return {
        type: RESET,
    }
}