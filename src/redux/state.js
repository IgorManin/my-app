import React from 'react';
import {contentReducer} from './content-reducer'
import {messageReducer} from "./message-reducer";
import {siteBarReducer} from "./siteBar-reducer";


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
            newDialogsMessage: ''
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
        this._state.content = contentReducer (this._state.content, action)
        this._state.dialogs = messageReducer (this._state.dialogs, action)
        this._state.siteBar = siteBarReducer (this._state.siteBar, action)
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
}

export default store

