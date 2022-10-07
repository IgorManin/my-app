import React from 'react';


export let addPostActionCreate = () => {
    return {
        type: 'ADD-NEW-POST'
    }
}

export let updatePostActionCreate = (newPost) => {
    return {
        type: 'UPDATE-POST', newText: newPost
    }
}

let store = {
    _state: {
        dialogs: {
            messageValue: [
                {message: "Hi"},
                {message: "How are u"},
                {message: "What are u doing"},
            ],
            nameData: [
                {id: 1, name: 'Masha'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Alexey'},
                {id: 4, name: 'Dmitriy'},
            ],
        },
        content: {
            messageData: [
                {id: 1, message: 'How are u', likesCount: 23},
                {id: 2, message: 'im find', likesCount: 27},
                {id: 3, message: 'And u?', likesCount: 32},
                {id: 4, message: 'Im fine to', likesCount: 14},
                {id: 5, message: 'Thanks', likesCount: 88},
            ],
            newMessageData: ''
        },
        siteBar: {
            bar: [
                {id: 1, name: 'Andrey'},
                {id: 2, name: 'Dmitriy'},
                {id: 3, name: 'Alexey'},
            ]
        },
    },

    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        if (action.type === 'ADD-NEW-POST') {
            let newPost = {
                id: 6,
                message: this._state.content.newMessageData,
                likesCount: 0
            }
            this._state.content.messageData.push(newPost)
            this._state.content.newMessageData = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-POST') {
            this._state.content.newMessageData = action.newText
            this._callSubscriber(this._state)
        }
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
}

export default store

