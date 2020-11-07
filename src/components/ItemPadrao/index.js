import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ItemPadrao = (props) => {
    return (
        <div className={props.itemActive.id === props.data.id ? 'divItem divItemActive' : 'divItem'} onClick={() => props.clickItem(props.data)}>
            {!!props.data.suggestion && (
                <div className="itemSuggestion">
                    <FontAwesomeIcon icon={faStar} />
                </div>
            )}
            <div className="divImage"><img src={props.data.image} alt="" className="imageBox" /></div>
            <div className="textProduct">{props.data.name}</div>
        </div>
    )
}

export default ItemPadrao