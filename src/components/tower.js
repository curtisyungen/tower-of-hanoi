import React from "react";
import Ring from "./ring";

const Tower = ({ id, towerId, rings = [], clickRing, clickTower }) => {
    return (
        <div 
        id={`towerWrapper${id+1}`}
        className="towerWrapper" 
        style={{
            border: "1px solid black",
            display: "inline-block",
            height: "551px",
            position: "relative",
            width: "300px",
        }}
        >
            <div 
                id={towerId}
                className={`tower`}
                onClick={clickTower}
                style={{
                    backgroundColor: "black",
                    height: "500px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "50px",
                    width: "50px",
                    zIndex: 1,
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
        </div>
    )
}

export default Tower;