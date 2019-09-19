import React from "react";

// ringId: integer, the number identifier of each ring, numbered 1-5
// vertPosition: integer, ring's vertical position on its tower
// tower: integer, the tower that the ring is currently on
// clickRing: function, allows ring to be dragged and dropped

const Ring = ({ ringId, vertPosition, tower, clickRing }) => {
    return (
        <div 
            id={ringId}
            className={`ring`}
            onMouseDown={(event) => clickRing(ringId, tower, event)}
            style={{
                backgroundColor: `rgb(${ringId * 30}, 100, ${ringId * 30})`,
                bottom: `${(vertPosition * 50)}px`,
                cursor: "pointer",
                height: "50px",
                left: "124px",
                position: "absolute",
                transform: `translate(${-(ringId * 30) + 25}px)`,
                width: `${ringId * 60}px`,
                zIndex: 10,
            }}
        >
            {ringId}
        </div>
    )
}

export default Ring;