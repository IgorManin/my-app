const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'

export const messageReducer = (state, action) => {
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