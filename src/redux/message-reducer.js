const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'

let initialState = {
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
}

const messageReducer = (state = initialState, action) => {
    if (action.type === ADD_MESSAGE) {
        let message = {
            message: state.newDialogsMessage
        }
        state.messageValue.push(message)
        state.newDialogsMessage = ''
    } else if (action.type === UPDATE_MESSAGE) {
        state.newDialogsMessage = action.newMessageAdd
    }

    return state
}



export let addMessageActionCreate = () => ({type: 'ADD-MESSAGE'})
export  let updateMessageActionCreate = (newMessage) => ({type: 'UPDATE-MESSAGE', newMessageAdd: newMessage})

export default messageReducer