import React from "react";


function SocialItem(props) {
    return (
        <li className="list-group-item" >
            <img src={props.img} alt= {`icon de :  ${props.argument}`}/> 
            <input type="checkbox" id={props.id}></input>
            <label htmlFor = {props.id} >{props.argument}</label>
        </li>

    );
}

export default SocialItem;
