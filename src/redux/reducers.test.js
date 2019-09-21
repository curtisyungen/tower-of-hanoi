import reducer from "./reducers";

const DEF_STATE = { towers: [ [ 5, 4, 3, 2, 1 ], [], [] ] };

// ====================================================================
// TESTS
// A couple reducer tests using JestJS
// https://jestjs.io/
// ====================================================================

test("test default state", () => {
    let test_action = {
        type: "TEST_ACTION",
    }

    let def = reducer(undefined, test_action);

    expect(def).toMatchObject(DEF_STATE);
});

test("test move", () => {
    let move = {
        type: "MOVE",
        payload: {
            startTower: 0,
            endTower: 1,
        }
    }

    let postMove = {
        towers: [ [ 5, 4, 3, 2 ], [1], [] ]
    }

    expect(reducer(DEF_STATE, move)).toMatchObject(postMove);
});
