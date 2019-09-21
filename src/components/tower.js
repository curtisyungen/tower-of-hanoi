import React from "react";
import Ring from "./ring";

// id: integer, the numerical identifier of the tower, numbered 0 - 2
// towerId: string, name identifier of the tower, i.e. 'tower1', 'tower2', 'tower3'
// rings: array, rings that are currently on the tower
// clickRing: function, allows each ring to be dragged and dropped. Passed down to child element.

const Tower = ({ id, towerId, rings = [] }) => {

    let wrapperStyle = {
        borderBottom: "10px solid black",
        display: "inline-block",
        position: "relative",
        width: "300px",
    }

    let towerStyle = {
        backgroundColor: "rgb(41, 41, 41)",
        borderTopLeftRadius: "4px",
        borderTopRightRadius: "4px",
        height: "500px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "50px",
        width: "50px",
        zIndex: 1,
    }

    return (
        <div 
            id={`towerWrapper${id+1}`}
            className="towerWrapper" 
            style={wrapperStyle}
        >
            {rings}
            <div 
                id={towerId}
                className={`tower`}
                style={towerStyle}
            />
        </div>
    )
}

export default Tower;