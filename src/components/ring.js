import React from "react";

// ringId: integer, the number identifier of each ring, numbered 1-5
// vertPosition: integer, ring's vertical position on its tower
// tower: integer, the tower that the ring is currently on
// clickRing: function, allows ring to be dragged and dropped

const Ring = ({ ringId, vertPosition, tower, clickRing }) => {

    let style = {
        // backgroundColor: `rgb(${255}, ${255 - (ringId * 14)}, ${100 - (ringId * 10)})`,
        backgroundImage: `linear-gradient(to right, rgb(255, 236, 140), rgb(${255}, ${255 - (ringId * 14)}, ${100 - (ringId * 10)}))`,
        border: "1px solid rgb(100, 79, 31)",
        borderRadius: "4px",
        bottom: `${(vertPosition * 50)}px`,
        color: "#000",
        cursor: "pointer",
        height: "50px",
        left: "124px",
        marginBottom: "1px",
        position: "absolute",
        transform: `translate(${-(ringId * 30) + 25}px)`,
        width: `${ringId * 60}px`,
        zIndex: 10,
    };

    return (
        <div 
            id={ringId}
            className={`ring`}
            onMouseDown={(event) => clickRing(ringId, tower, event)}
            style={style}
        >
            {ringId}
        </div>
    )
}

export default Ring;