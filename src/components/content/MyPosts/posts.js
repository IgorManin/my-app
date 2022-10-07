import React from "react";
import s from './posts.module.css'
import Post from "./Post/post";
import {addPostActionCreate, updatePostActionCreate} from '../../../redux/state'


const Posts = (props) => {

    let newPostElement = React.createRef()

    let addPost = () => {
        debugger;
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
                          value={props.newMessageData}
                          onChange={onPostChange} className={s.textForm} name="Мой текст"
                          id="1" cols="30" rows="5">
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