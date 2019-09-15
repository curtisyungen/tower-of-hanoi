import React from "react";

function Tower (props) {
    return (
        <div 
            style={
                {left: `${33 * props.num}%`}
            }
            className="towerContainer">
            {props.rings}
            <div className="tower"></div>
        </div>
    )
}

export default Tower;