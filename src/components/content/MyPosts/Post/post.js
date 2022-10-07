import React from "react";
import s from './post.module.css'


const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://avatars.mds.yandex.net/i?id=3663bfc273e8fc04fe359d672c1617ce-5604559-images-thumbs&n=13"
                alt=""/>
            {props.message}
            <div>
                <span> like</span> {props.likesCount}
            </div>
        </div>

    )
}

export default Post