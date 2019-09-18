import React from "react";
import Ring from "./ring";

const Tower = ({ id, towerId, rings = [], clickRing }) => {
    return (
        <div 
            id={towerId}
            className={`tower`}
            style={{
                backgroundColor: "black",
                left: `${(id * 25) + 10}%`,
                height: "500px",
                marginTop: "50px",
                position: "absolute",
                width: "50px"
            }}
        >
            {rings.map((ring, index) => (
                <Ring
                    key={index}
                    ringId={ring}
                    vertPosition={index}
                    tower={towerId}
                    clickRing={clickRing}
                />
            ))}
        </div>
    )
}

export default Tower;