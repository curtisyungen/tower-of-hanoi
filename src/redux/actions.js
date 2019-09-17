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
export const moveRing = (ring) => {
    return {
        type: MOVE,
        payload: {
            ring: ring,
        }
    }
}

export const resetGame = () => {
    let towers = [[5, 4, 3, 2, 1], [], []];
    return {
        type: RESET,
        payload: {
            towers: towers,
        }
    }
}