import React from "react";
import {addMessageActionCreate, updateMessageActionCreate} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogs

    let addNewMessage = () => {
        props.store.dispatch(addMessageActionCreate())
    }

    let onChange = (body) => {
        props.store.dispatch(updateMessageActionCreate(body))
    }

    return (
        <Dialogs
            updateNewMessageBody={onChange}
            addMessage={addNewMessage}
            dialogs={state}
        />
    )
}
export default DialogsContainer