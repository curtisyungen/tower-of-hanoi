import React from "react";

const Ring = ({ ringId, vertPosition, tower, moveRing }) => {
    return (
        <div 
            id={ringId}
            className={`ring`}
            onMouseDown={() => moveRing(ringId, tower)}
            style={{
                backgroundColor: `rgb(${ringId * 30},${ringId * 30}, ${ringId * 30})`,
                bottom: `${vertPosition * 50}px`,
                cursor: "pointer",
                height: "50px",
                left: `${tower * 25}%`,
                position: "absolute",
                width: `${ringId * 30}px`,
            }}
        >
            {ringId}
        </div>
    )
}

export default Ring;