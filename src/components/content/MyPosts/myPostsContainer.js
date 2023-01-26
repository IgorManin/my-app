import React from "react";
import {addPostActionCreate, updatePostActionCreate} from '../../../redux/content-reducer'
import Posts from "./posts";


const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreate())
    }

    let onPostChange = (text) => {
        let action = updatePostActionCreate(text)
        props.store.dispatch(action)
    }

    return (<Posts updateNewPostText={onPostChange}
                   addPost={addPost}
                   posts={state.content.messageData}
                   newPostText={state.content.newMessageData}
    />)
}

export default MyPostsContainer