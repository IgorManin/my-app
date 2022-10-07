import React from "react";
import Posts from "./MyPosts/posts";
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Content = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts posts={props.posts.messageData}
                   dispatch = {props.dispatch}
                   newMessageData={props.newMessageData}/>

        </div>
    )

}

export default Content