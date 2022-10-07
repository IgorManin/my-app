import React from 'react';


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

    getState () {
        return this._state
    },

    _callSubscriber () {
        console.log('state changed')
    },

    addNewPost () {

        let newPost = {
            id: 6,
            message: this._state.content.newMessageData,
            likesCount: 0
        }
        this._state.content.messageData.push(newPost)
        this._state.content.newMessageData = ''
        this._callSubscriber(this._state)
    },

    updatePost (newText) {
       debugger;
        this._state.content.newMessageData = newText
        this._callSubscriber(this._state)
        console.log(newText)
    },

    subscribe (observer) {
        this._callSubscriber = observer
    },
}

export default store




// let rerenderEntireTree = () => {
//     console.log('state changed')
// }
//
//
// const state = {
//     dialogs: {
//         messageValue: [
//             {message: "Hi"},
//             {message: "How are u"},
//             {message: "What are u doing"},
//         ],
//         nameData: [
//             {id: 1, name: 'Masha'},
//             {id: 2, name: 'Andrey'},
//             {id: 3, name: 'Alexey'},
//             {id: 4, name: 'Dmitriy'},
//         ],
//     },
//     content: {
//         messageData: [
//             {id: 1, message: 'How are u', likesCount: 23},
//             {id: 2, message: 'im find', likesCount: 27},
//             {id: 3, message: 'And u?', likesCount: 32},
//             {id: 4, message: 'Im fine to', likesCount: 14},
//             {id: 5, message: 'Thanks', likesCount: 88},
//         ],
//         newMessageData: ''
//     },
//     siteBar: {
//         bar: [
//             {id: 1, name: 'Andrey'},
//             {id: 2, name: 'Dmitriy'},
//             {id: 3, name: 'Alexey'},
//         ]
//     },
// }
//
// export const addNewPost = () => {
//     let newPost = {
//         id: 6,
//         message: state.content.newMessageData,
//         likesCount: 0
//     }
//     state.content.messageData.push(newPost)
//     state.content.newMessageData = ''
//     rerenderEntireTree(state)
// }
//
// export const updatePost = (newText) => {
//     state.content.newMessageData = newText
//     rerenderEntireTree(state)
// }
//
// export const subscribe = (observer) => {
//     rerenderEntireTree = observer
// }
//
// export default state
