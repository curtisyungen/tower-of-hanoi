import React from "react";

const Ring = ({ ringId, vertPosition, tower, clickRing }) => {
    return (
        <div 
            id={ringId}
            className={`ring`}
            onMouseDown={(event) => clickRing(ringId, tower, event)}
            style={{
                backgroundColor: `rgb(${ringId * 30},${ringId * 30}, ${ringId * 30})`,
                bottom: `${vertPosition * 50}px`,
                cursor: "pointer",
                height: "50px",
                left: `${tower * 25}%`,
                position: "absolute",
                transform: `translate(${-(ringId * 15) + 25}px)`,
                width: `${(ringId * 50) + 20}px`,
                zIndex: 10,
            }}
        >
            {ringId}
        </div>
    )
}

export default Ring;