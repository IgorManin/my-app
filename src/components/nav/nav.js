import React from "react";
import s from './nav.module.css'
import {NavLink} from "react-router-dom";
import SiteBar from '../siteBar/sitebar'


const Nav = (props) => {
    return (
        <div className={s.nav}>
        <div>
            <NavLink to="/content" className = { navData => navData.isActive ? s.activeLink : s.item }>
                Profile
            </NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" className={ navData => navData.isActive ? s.activeLink : s.item }>
                Messages
            </NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" className={ navData => navData.isActive ? s.activeLink : s.item }>
                News
            </NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" className={ navData => navData.isActive ? s.activeLink : s.item }>
                Music
            </NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings" className={ navData => navData.isActive ? s.activeLink : s.item }>
                Settings
            </NavLink>
        </div>
            <SiteBar siteBarFriendsName={props.siteBarFriendsName} />
    </div>)
}

export default Nav