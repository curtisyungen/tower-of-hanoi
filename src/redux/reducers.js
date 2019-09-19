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

            // Find topmost ring
            let startTowerArr = state.towers[action.payload.startTower];
            let topRing = startTowerArr.slice(-1)[0];

            // Check that ring isn't smaller on end tower
            let endTowerArr = state.towers[action.payload.endTower];
            let topRingEnd = endTowerArr.slice(-1)[0];

            if (topRingEnd < topRing) {
                console.log("Error.");
                return state;
            }

            // console.log("Success.");
            let newStartArr = startTowerArr.slice(0);
            let newEndArr = endTowerArr.slice(0);

            newStartArr.pop();
            newEndArr.push(topRing);

            let newTowers = state.towers.slice(0);
            let startTowerId = action.payload.startTower;
            let endTowerId = action.payload.endTower;

            newTowers[startTowerId] = newStartArr;
            newTowers[endTowerId] = newEndArr;
            
            return Object.assign({}, state, {   // First parameter must be empty object
                towers: newTowers
            });

        case RESET:
            return Object.assign({}, initialState);

        default: 
            return state;   // Return previous state for any unknown action
    }
}

export default reducer;