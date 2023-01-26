const ADD_NEW_POST = 'ADD-NEW-POST'
const UPDATE_POST = 'UPDATE-POST'

let initialState = {
    messageData: [
        {id: 1, message: 'How are u', likesCount: 23},
        {id: 2, message: 'im find', likesCount: 27},
        {id: 3, message: 'And u?', likesCount: 32},
        {id: 4, message: 'Im fine to', likesCount: 14},
        {id: 5, message: 'Thanks', likesCount: 88},
    ],
    newMessageData: ''
}

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                id: 6,
                message: state.newMessageData,
                likesCount: 0
            }
            state.messageData.push(newPost)
            state.newMessageData = ''
            break
        case UPDATE_POST:
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

export default contentReducer