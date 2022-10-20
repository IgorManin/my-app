const ADD_NEW_POST = 'ADD-NEW-POST'
const UPDATE_POST = 'UPDATE-POST'

export const contentReducer = (state, action) => {
    if (action.type === ADD_NEW_POST) {
        let newPost = {
            id: 6,
            message: state.newMessageData,
            likesCount: 0
        }
        state.messageData.push(newPost)
        state.newMessageData = ''
    } else if (action.type === UPDATE_POST) {
       state.newMessageData = action.newText
    }

    return state
}


export let addPostActionCreate = () => ({type: 'ADD-NEW-POST'})

export let updatePostActionCreate = (newPost) => {
    return {
        type: 'UPDATE-POST', newText: newPost
    }

}