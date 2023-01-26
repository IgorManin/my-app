import React from "react";
import s from './posts.module.css'
import Post from "./Post/post";


const Posts = (props) => {


    const messageValue = props.posts.map((el) => <Post message={el.message} likesCount={el.likesCount}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let newPost = newPostElement.current.value;
        props.updateNewPostText(newPost)
    }

    return (
        <div>
            <div className={s.myPosts}>My Posts</div>
            <div>
                <textarea ref={newPostElement}
                          onChange={onPostChange}
                          value={props.newMessageData}
                          className={s.textForm}
                          placeholder={'Enter your message'}>
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