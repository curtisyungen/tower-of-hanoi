import React from "react";

function Ring (props) {

    let style = {
        width: `${props.num * 25 + 100}px`,
        backgroundColor: `hsl(${props.num * 75 % 360}, 100%, 45%)`,
    }

    return (
        <div
            style={
                {bottom: `${(props.position) * 50}px`}
            }
            className={`ring-${props.num} ringContainer`}
        >
            <div
                onMouseDown={this.props.grabRing(props.num, props.rod)}
                style={style}
                className="ring"
            />   
        </div>
    )
}

export default Ring;