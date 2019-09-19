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
export const moveRing = (startTower, endTower) => {
    return {
        type: MOVE,
        payload: {
            startTower,
            endTower
        }
    }
}

export const resetGame = () => {
    return {
        type: RESET
    }
}
