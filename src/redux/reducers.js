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

            // If start tower is same as end tower, return state
            if (state.towers[action.payload.startTower] === state.towers[action.payload.endTower]) {
                return state.towers;
            }

            // Get rings on starting and ending towers
            let startTowerArr = state.towers[action.payload.startTower];
            let endTowerArr = state.towers[action.payload.endTower];

            // Get topmost ring on starting and ending towers
            let startTopRing = startTowerArr.slice(-1)[0];
            let endTopRing = endTowerArr.slice(-1)[0];

            // Prevent larger ring from being placed on smaller one
            if (endTopRing < startTopRing) {
                alert("Cannot place larger ring on smaller one, you dolt!");
                return state.towers;
            }

            // Get all rings on starting and ending towers and store in new array
            let newStartArr = startTowerArr.slice(0);
            let newEndArr = endTowerArr.slice(0);

            // Remove top ring from starting tower
            newStartArr.pop();

            // Add ring to ending tower
            newEndArr.push(startTopRing);

            // Get array with all three towers and store in new array
            let newTowers = state.towers.slice(0);

            // Update new towers array with new starting and ending towers
            newTowers[action.payload.startTower] = newStartArr;
            newTowers[action.payload.endTower] = newEndArr;

            console.log("State", state);
            console.log("New Towers", newTowers);

            // Return new object containing updated state
            return Object.assign({}, state, {
                towers: newTowers
            });

        case RESET:
            // Return new object containing initial state
            return Object.assign({}, initialState);

        default: 
            // Return previous state for any unknown action
            return state;   
    }
}

export default reducer;