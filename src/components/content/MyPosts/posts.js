import React from "react";
import s from './posts.module.css'
import Post from "./Post/post";
import {addPostActionCreate, updatePostActionCreate} from '../../../redux/content-reducer'


const Posts = (props) => {
    console.log(newPostElement)
    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreate())
    }

    let onPostChange = () => {
        let newPost = newPostElement.current.value;
        props.dispatch(updatePostActionCreate(newPost))
    }

    const messageValue = props.posts.map((el) => <Post message={el.message} likesCount={el.likesCount}/>)
    return (
        <div>
            <div className={s.myPosts}>My Posts</div>
            <div>
                <textarea ref={newPostElement}
                          onChange={onPostChange}
                          value={props.newMessageData}
                          className={s.textForm}>
                </textarea>
            </div>
            <div>
                <button onClick={addPost} className={s.button}>Add post</button>
            </div>

            <div className={s.item}>
                {messageValue}
            </div>

        </div>
    )
}

export default Posts