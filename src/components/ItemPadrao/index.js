import React from "react";
import "./style.css";

function ItemPadrao(props) {
    return (
        <div className="divItem" onClick={() => props.clickItem(props.data)}>
            {!!props.data.suggestion && (
                <div className="itemSuggestion">Icon</div>
            )}
            <div className="divImage"><img src={props.data.image} alt="" className="imageBox" /></div>
            <div className="textProduct">{props.data.name}</div>
        </div>
    );
}

export default ItemPadrao;