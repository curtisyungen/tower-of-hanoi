import { createStore } from "redux";

export const move = (towers) => {
    return {
        type: "MOVE",
        towers
    }
}

export const reset = (startTower = 1) => {
    let towers = [[], [], []];
    towers.splice(startTower, 1, [5, 4, 3, 2, 1])
    return {
        type: "RESET",
        startTower,
        towers
    }
}

const initialState = {
    startTower: 1,
    towers: [
        [5, 4, 3, 2, 1],
        [],
        []
    ]
}

const moveReducer = (state = initialState, action) => {
    switch(action.type) {
        case "MOVE": 
            
            break;
        case "RESET":
            break;
        default: 
            return state;
    }
}

export const store = createStore(moveReducer);