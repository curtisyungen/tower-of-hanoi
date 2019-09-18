import React from "react";
import Ring from "./ring";

const Tower = ({ towerId, rings = [], clickRing }) => {
    return (
        <div 
            id={towerId}
            className={`tower`}
            style={{
                backgroundColor: "black",
                left: `${(towerId * 25) + 10}%`,
                height: "500px",
                marginTop: "50px",
                position: "absolute",
                width: "50px"
            }}
        >
            {rings.map((ring, index) => (
                <Ring
                    key={ring}
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