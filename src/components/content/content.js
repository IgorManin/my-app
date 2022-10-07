import React from "react";
import Posts from "./MyPosts/posts";
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Content = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts posts={props.posts.messageData}
                   addNewPost = {props.addNewPost}
                   newMessageData={props.newMessageData}
                   updatePost={props.updatePost}/>

        </div>
    )

}

export default Content