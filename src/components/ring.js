import React from "react";

const Ring = ({ ringId, vertPosition, tower, clickRing }) => {
    return (
        <div 
            id={ringId}
            className={`ring`}
            onMouseDown={(event) => clickRing(ringId, tower, event)}
            style={{
                backgroundColor: `rgb(${ringId * 30},100, ${ringId * 30})`,
                bottom: `${vertPosition * 50}px`,
                cursor: "pointer",
                height: "50px",
                left: `${tower * 25}%`,
                position: "absolute",
                transform: `translate(${-(ringId * 30) + 25}px)`,
                width: `${ringId * 60}px`,
                zIndex: 100,
            }}
        >
            {ringId}
        </div>
    )
}

export default Ring;