import React from "react";
import style from './../dialogs.module.css'
import {NavLink} from "react-router-dom";


const NameValue = (props) => {

    let path = '/dialogs/' + props.id
    return (
        <div>
            <NavLink className={ navData => navData.isActive ? style.active : style.dialog } to={path}> {props.name} </NavLink>
        </div>
    )
}



export default NameValue