import React from 'react';
import style from './sitebar.module.css'


const SiteBar = (props) => {
    return (
        <div className={style.friendsBlock}>
            <div className={style.friendsTitle}>Friends</div>
            <div className={style.friendsAvatar}></div>
            <div className={style.friendsAvatar}></div>
            <div className={style.friendsAvatar}></div>
            {props.siteBarFriendsName.map(({name}, i) => (
                <div key={i} className={style.friendsName}>{name}</div>
            ))}
        </div>
    )
}

export default SiteBar