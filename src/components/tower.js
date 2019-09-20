import React from "react";
import Ring from "./ring";

// id: integer, the numerical identifier of the tower, numbered 0 - 2
// towerId: string, name identifier of the tower, i.e. 'tower1', 'tower2', 'tower3'
// rings: array, rings that are currently on the tower
// clickRing: function, allows each ring to be dragged and dropped. Passed down to child element.

const Tower = ({ id, towerId, rings = [] }) => {
    return (
        <div 
            id={`towerWrapper${id+1}`}
            className="towerWrapper" 
            style={{
                borderBottom: "10px solid black",
                display: "inline-block",
                position: "relative",
                width: "300px",
            }}
        >
            {rings}
            <div 
                id={towerId}
                className={`tower`}
                style={{
                    backgroundColor: "black",
                    height: "500px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "50px",
                    width: "50px",
                    zIndex: 1,
                }}
            />
        </div>
    )
}

export default Tower;